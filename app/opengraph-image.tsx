import {ImageResponse} from 'next/og';
export const alt='Aina Midget — Un esprit. Plusieurs dimensions.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function OG(){return new ImageResponse(<div style={{width:'100%',height:'100%',background:'#141917',color:'#eeeae1',display:'flex',flexDirection:'column',padding:'70px',justifyContent:'space-between'}}><div style={{display:'flex',fontSize:22,letterSpacing:5,color:'#bc9875'}}>AINA MIDGET · PORTFOLIO</div><div style={{display:'flex',flexDirection:'column',fontSize:88,lineHeight:1.05}}><span>Un esprit.</span><span>Plusieurs dimensions.</span></div><div style={{display:'flex',fontSize:23,color:'#b0b6ae'}}>UX/UI · Communication · Stratégie · Agronomie</div></div>,size);}
