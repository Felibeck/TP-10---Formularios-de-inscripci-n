import { Platform } from 'react-native';

export const colors = {
    background: '#0B0B0D',
    backgroundAlt: '#1A1912',
    card: '#F7F2E7',
    cardBorder: '#D4AF37',
    gold: '#D4AF37',
    goldSoft: 'rgba(212, 175, 55, 0.35)',
    goldDeep: '#8A6D1F',
    ink: '#1C1A14',
    inkSoft: '#5B5646',
    cream: '#F7F2E7',
    creamSoft: 'rgba(247, 242, 231, 0.72)',
    error: '#7A2E2E',
};

export const fonts = {
    serif: Platform.select({
        web: "Georgia, 'Times New Roman', serif",
        ios: 'Georgia',
        android: 'serif',
        default: 'serif',
    }),
    sans: Platform.select({
        web: "-apple-system, 'Segoe UI', Roboto, sans-serif",
        default: undefined,
    }),
    mono: Platform.select({
        web: "'Courier New', Courier, monospace",
        default: 'monospace',
    }),
};

export const tiers = {
    gold: { label: 'GOLD', accent: '#D4AF37', surface: '#151107' },
    platinum: { label: 'PLATINUM', accent: '#C9D3DC', surface: '#101214' },
    centurion: { label: 'CENTURION', accent: '#F2F2F0', surface: '#000000' },
};
