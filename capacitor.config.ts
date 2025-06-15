import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.7e0089480b4343128846f537ed03f9ff',
  appName: 'rent-flow',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://7e008948-0b43-4312-8846-f537ed03f9ff.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
};

export default config;