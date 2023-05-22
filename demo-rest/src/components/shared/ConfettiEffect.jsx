import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const duration = 8000;

  useEffect(() => {
    const startTime = Date.now();

    const updateConfetti = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = duration - elapsedTime;
      const opacity = remainingTime > 0 ? remainingTime / duration : 0;

      setOpacity(opacity);

      if (opacity > 0) {
        requestAnimationFrame(updateConfetti);
      } else {
        setShowConfetti(false);
      }
    };

    requestAnimationFrame(updateConfetti);

    return () => {
      cancelAnimationFrame(updateConfetti);
    };
  }, [duration]);

  return showConfetti ? (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={200}
      opacity={opacity}
    />
  ) : null;
};

export default ConfettiEffect;
