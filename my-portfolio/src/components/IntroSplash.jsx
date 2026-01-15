import { useEffect } from "react";

export default function IntroSplash({ show, onFinish, imageSrc }) {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => onFinish?.(), 1800); // durasi splash
    return () => clearTimeout(t);
  }, [show, onFinish]);

  if (!show) return null;

  return (
    <div className="intro-splash" role="dialog" aria-label="Intro">
      <div className="intro-card">
        <img className="intro-photo" src={imageSrc} alt="Jonathan Sutandi" />
        <div className="intro-text">
          <div className="intro-kicker">Welcome</div>
          <div className="intro-name">
            Jonathan<span>.</span>
          </div>
          <div className="intro-sub">
            Web Developer • UI/UX • Data Analyst
          </div>
        </div>
      </div>
    </div>
  );
}
