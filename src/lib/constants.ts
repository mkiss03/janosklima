// Single source of truth for company facts used across the site.
// Only confirmed data lives here — anything unconfirmed is a TODO string,
// never a made-up value.

export const COMPANY = {
  name: 'Ecocool Klíma Kft.',
  addressStreet: 'Luther Márton utca 1/6.a',
  addressZip: '5540',
  addressCity: 'Szarvas',
  addressCountry: 'Ungarn',
  vatId: 'HU13044639',
  taxNumber: '13044639-2-04',
  ceo: 'Franko János',
  phoneAT: '+43 676 911 7738',
  phoneATHref: 'tel:+436769117738',
  phoneHU: '+36 20 209 7122',
  phoneHUHref: 'tel:+36202097122',
  email: 'frankojanos19790122@gmail.com',
  registerAuthority:
    'Dienstleisterregister, Bundesministerium für Wirtschaft, Energie und Tourismus',
  registerTrade: 'Kälte- und Klimatechnik',
  registerNumber: 'GZ 2026-0.408.541',
  registerValidFrom: '05.06.2026',
  registerValidTo: '04.06.2027',
  slogan: 'Komfort das ganze Jahr über',
} as const;

export const BRANDS = ['Toshiba', 'Mitsubishi Electric', 'Daikin', 'Gree'] as const;

export const REGIONS_PRIMARY = ['Wien', 'Niederösterreich', 'Oberösterreich', 'Burgenland'] as const;

export const PRICING = {
  startingPrice: '1.100 €',
  vatNote: 'zzgl. USt.',
  maxPipeLength: '3 m',
  maxRoomHeight: '3 m',
} as const;

export const NAV_LINKS = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#preise', label: 'Preise' },
  { href: '#einsatzgebiet', label: 'Einsatzgebiet' },
  { href: '#kontakt', label: 'Kontakt' },
] as const;
