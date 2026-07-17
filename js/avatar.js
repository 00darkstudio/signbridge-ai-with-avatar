window.SignAvatar = (() => {
  const FRAME_MS = 620;
  const REST_MS = 180;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function easeInOut(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function mixPoint(a, b, t) {
    return [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
  }

  function mixArm(a, b, t) {
    return {
      shoulder: mixPoint(a.shoulder, b.shoulder, t),
      elbow: mixPoint(a.elbow, b.elbow, t),
      hand: mixPoint(a.hand, b.hand, t),
      rotate: lerp(a.rotate || 0, b.rotate || 0, t)
    };
  }

  function setLine(line, from, to) {
    line.setAttribute("x1", from[0].toFixed(2));
    line.setAttribute("y1", from[1].toFixed(2));
    line.setAttribute("x2", to[0].toFixed(2));
    line.setAttribute("y2", to[1].toFixed(2));
  }

  function setHand(group, arm) {
    group.setAttribute("transform", `translate(${arm.hand[0].toFixed(2)} ${arm.hand[1].toFixed(2)}) rotate(${arm.rotate.toFixed(2)}) translate(${-arm.hand[0].toFixed(2)} ${-arm.hand[1].toFixed(2)})`);
    const ellipse = group.querySelector("ellipse");
    ellipse.setAttribute("cx", arm.hand[0].toFixed(2));
    ellipse.setAttribute("cy", arm.hand[1].toFixed(2));

    const fingers = [...group.querySelectorAll("line")];
    const offsets = arm.hand[0] < 360
      ? [[-8, -24, -18, -54], [2, -26, 2, -60], [13, -23, 22, -52]]
      : [[-12, -23, -22, -52], [0, -27, 0, -60], [12, -23, 22, -52]];

    fingers.forEach((finger, index) => {
      const offset = offsets[index];
      finger.setAttribute("x1", (arm.hand[0] + offset[0]).toFixed(2));
      finger.setAttribute("y1", (arm.hand[1] + offset[1]).toFixed(2));
      finger.setAttribute("x2", (arm.hand[0] + offset[2]).toFixed(2));
      finger.setAttribute("y2", (arm.hand[1] + offset[3]).toFixed(2));
    });
  }

  class AvatarPlayer {
    constructor(db, hooks = {}) {
      this.db = db;
      this.hooks = hooks;
      this.speed = 1;
      this.sequence = ["HELLO"];
      this.expandedFrames = [];
      this.index = 0;
      this.frameStarted = 0;
      this.raf = 0;
      this.playing = false;
      this.elements = {
        leftUpper: document.getElementById("leftUpper"),
        leftLower: document.getElementById("leftLower"),
        rightUpper: document.getElementById("rightUpper"),
        rightLower: document.getElementById("rightLower"),
        leftHand: document.getElementById("leftHand"),
        rightHand: document.getElementById("rightHand")
      };
      this.loadSequence(this.sequence);
      this.renderPose(db.poses.rest);
    }

    loadSequence(sequence) {
      this.sequence = sequence;
      this.expandedFrames = [];
      for (const signName of sequence) {
        const sign = this.db.signs[signName];
        sign.frames.forEach((poseName, poseIndex) => {
          this.expandedFrames.push({ signName, poseName, poseIndex });
        });
      }
      this.index = 0;
      this.frameStarted = performance.now();
      this.notify();
      this.renderCurrent(0);
    }

    play() {
      if (this.playing) return;
      this.playing = true;
      this.frameStarted = performance.now();
      this.raf = requestAnimationFrame((time) => this.tick(time));
    }

    pause() {
      this.playing = false;
      cancelAnimationFrame(this.raf);
    }

    reset() {
      this.pause();
      this.index = 0;
      this.frameStarted = performance.now();
      this.renderCurrent(0);
      this.notify();
    }

    setSpeed(speed) {
      this.speed = Number(speed);
    }

    tick(time) {
      if (!this.playing) return;
      const duration = (this.currentFrame().poseName === "rest" ? REST_MS : FRAME_MS) / this.speed;
      const progress = Math.min(1, (time - this.frameStarted) / duration);
      this.renderCurrent(easeInOut(progress));

      if (progress >= 1) {
        this.index += 1;
        if (this.index >= this.expandedFrames.length - 1) {
          this.index = 0;
        }
        this.frameStarted = time;
        this.notify();
      }
      this.raf = requestAnimationFrame((nextTime) => this.tick(nextTime));
    }

    currentFrame() {
      return this.expandedFrames[this.index] || { signName: "HELLO", poseName: "rest" };
    }

    nextFrame() {
      return this.expandedFrames[this.index + 1] || this.expandedFrames[0] || this.currentFrame();
    }

    renderCurrent(progress) {
      const from = this.db.poses[this.currentFrame().poseName];
      const to = this.db.poses[this.nextFrame().poseName];
      this.renderPose({
        left: mixArm(from.left, to.left, progress),
        right: mixArm(from.right, to.right, progress)
      });
    }

    renderPose(pose) {
      setLine(this.elements.leftUpper, pose.left.shoulder, pose.left.elbow);
      setLine(this.elements.leftLower, pose.left.elbow, pose.left.hand);
      setLine(this.elements.rightUpper, pose.right.shoulder, pose.right.elbow);
      setLine(this.elements.rightLower, pose.right.elbow, pose.right.hand);
      setHand(this.elements.leftHand, pose.left);
      setHand(this.elements.rightHand, pose.right);
    }

    notify() {
      const active = this.currentFrame().signName;
      const sequenceIndex = this.sequence.indexOf(active);
      if (this.hooks.onFrame) {
        this.hooks.onFrame({
          signName: active,
          meaning: this.db.signs[active].meaning,
          sequenceIndex: sequenceIndex < 0 ? 0 : sequenceIndex,
          sequenceTotal: this.sequence.length
        });
      }
    }
  }

  return { AvatarPlayer };
})();
