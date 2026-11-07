import { ImageResponse } from 'next/og';
export const alt = 'Richards + Company — Edmonton Lawyers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '90px', background: '#17302b', color: '#f5f3ee', fontFamily: 'serif' }}><div style={{ display: 'flex', fontSize: 25, letterSpacing: 8, color: '#c8ab72' }}>RICHARDS + COMPANY</div><div style={{ display: 'flex', flexDirection: 'column', marginTop: 40, fontSize: 76, lineHeight: 1.1 }}><span>Good counsel.</span><span>Grounded in real life.</span></div><div style={{ display: 'flex', marginTop: 35, fontSize: 25, color: '#d8d6ce' }}>Edmonton · Alberta</div></div>, size);
}
