import { Icon } from "./Icons.tsx";

interface AppHeaderProps {
  backLabel?: string;
  onBack?: () => void;
}

export function AppHeader({ backLabel, onBack }: AppHeaderProps) {
  return (
    <header className="app-header">
      {onBack ? (
        <button className="header-back" type="button" onClick={onBack} aria-label={backLabel}>
          <Icon name="arrow-left" />
          <span>{backLabel}</span>
        </button>
      ) : (
        <span className="header-spacer" />
      )}
      <span className="wordmark">Love with MBTI</span>
      <span className="header-spacer" aria-hidden="true" />
    </header>
  );
}
