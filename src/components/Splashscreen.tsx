// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// I dont want to give types for all the 'this'

import { useLayoutEffect, useRef } from 'react';
import Phaser from 'phaser';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const gameRef = useRef(null);

  useLayoutEffect(() => {
    const config = {
      type: Phaser.AUTO,
      pixelArt: false,
      parent: gameRef.current,
      transparent: false,
      backgroundColor: '#08090a',
      scale: {
        mode: Phaser.Scale.RESIZE,
        width: window.innerWidth,
        height: 300,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
        timer: 0,
      },
    };

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image('dragon', '/public/img/dragon.png');
    }

    function create() {
      const points = [];
      const texture = this.textures.get('dragon');
      const frame = texture.getFrameNames()[0];
      const totalPoints = 26;
      const length = texture.get(frame).width / totalPoints;

      for (let i = 0; i < totalPoints; i++) {
        points.push(
          new Phaser.Math.Vector2(i * length, 20 * Math.sin(i * 0.5)),
        );
      }

      this.dragon = this.add.rope(
        -texture.get(frame).width,
        this.scale.height / 2,
        'dragon',
        null,
        points,
        true,
      );

      this.dragon.aditionalInfo = {
        count: 0,
        direction: 'right',
        roar: true,
      };
    }

    function update() {
      if (!this.dragon) {
        console.warn('Dragon not initialized in update');
        return;
      }

      this.dragon.x += 8;
      this.dragon.y = this.scale.height / 2;

      // Update wave animation
      if (!this.dragon.aditionalInfo) {
        this.dragon.aditionalInfo = { count: 0 };
      }
      this.dragon.aditionalInfo.count += 0.1;

      for (let i = 0; i < this.dragon.points.length; i++) {
        this.dragon.points[i].y =
          Math.sin(i * 0.3 + this.dragon.aditionalInfo.count) * 20;
      }

      this.dragon.dirty = true;
      this.dragon.update();

      if (this.dragon.x > window.innerWidth + this.dragon.width) {
        // Store splash completion in sessionStorage and trigger callback
        sessionStorage.setItem('splashLoaded', 'true');
        onComplete();

        // Reset dragon position
        this.dragon.x = -this.dragon.width;
        this.dragon.aditionalInfo.count = 0;
      }
    }
    return () => {
      game.destroy(true);
    };
  }, [onComplete]);

  return <div ref={gameRef} className='h-[320px] w-full bg-[#08090a]' />;
};

export default SplashScreen;
