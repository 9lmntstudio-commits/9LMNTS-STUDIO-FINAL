import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { StudioShell } from '@/components/StudioShell';
import { HomePage } from '@/pages/HomePage';
import { EventOSHubPage } from '@/pages/EventOSHubPage';
import { CultureClashPage } from '@/pages/event-os/CultureClashPage';
import { PitchBattlePage } from '@/pages/event-os/PitchBattlePage';
import { RunwayOSPage } from '@/pages/event-os/RunwayOSPage';
import { SportsClashPage } from '@/pages/event-os/SportsClashPage';
import { SummitOSPage } from '@/pages/event-os/SummitOSPage';
import { ChefBattlePage } from '@/pages/event-os/ChefBattlePage';
import { SoundClashPage } from '@/pages/event-os/SoundClashPage';
import { WagerOSPage } from '@/pages/event-os/WagerOSPage';
import { LoveMatchPage } from '@/pages/event-os/LoveMatchPage';
import { WeddingOSPage } from '@/pages/event-os/WeddingOSPage';
import { FundTheGamePage } from '@/pages/FundTheGamePage';

export default function App() {
  return (
    <BrowserRouter>
      <StudioShell>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/event-os" element={<EventOSHubPage />} />
          <Route path="/event-os/culture-clash" element={<CultureClashPage />} />
          <Route path="/event-os/pitch-battle" element={<PitchBattlePage />} />
          <Route path="/event-os/runway" element={<RunwayOSPage />} />
          <Route path="/event-os/sports-clash" element={<SportsClashPage />} />
          <Route path="/event-os/wedding" element={<WeddingOSPage />} />
          <Route path="/event-os/summit" element={<SummitOSPage />} />
          <Route path="/event-os/chef-battle" element={<ChefBattlePage />} />
          <Route path="/event-os/sound-clash" element={<SoundClashPage />} />
          <Route path="/event-os/wager" element={<WagerOSPage />} />
          <Route path="/event-os/love-match" element={<LoveMatchPage />} />

          <Route path="/loa-game" element={<FundTheGamePage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </StudioShell>
    </BrowserRouter>
  );
}
