import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '@material-ui/core/SvgIcon';

/* eslint react/jsx-indent: 0 */
const LlvmIcon = ({ size, ...rest }) => (
  <SVGIcon viewBox="0 0 18 24" style={{ fontSize: `${size}px` }} {...rest}>
    <defs>
      <radialGradient id="radial-gradient" cx="-50.03" cy="66.6" r="0.12" gradientTransform="matrix(13.91, 0, 0, -14.09, 707.27, 957.41)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#4c5160" />
        <stop offset="0.52" stopColor="#262d3a" />
        <stop offset="1" stopColor="#121923" />
      </radialGradient>
      <radialGradient id="radial-gradient-2" cx="-53.76" cy="68.85" r="0.12" gradientTransform="matrix(13.19, 0, 0, -13.36, 722.66, 939.08)" xlinkHref="#radial-gradient" />
      <linearGradient id="linear-gradient" x1="4.21" y1="19.37" x2="4.33" y2="19.37" gradientTransform="matrix(-104.08, 9.91, 9.91, 104.08, 261.32, -2046.15)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#e6e8f0" />
        <stop offset="1" stopColor="#909a9d" />
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="4.21" y1="19.4" x2="4.33" y2="19.4" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-3" x1="4.21" y1="19.45" x2="4.33" y2="19.45" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-4" x1="4.21" y1="19.44" x2="4.33" y2="19.44" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-5" x1="4.21" y1="19.36" x2="4.33" y2="19.36" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-6" x1="4.21" y1="19.37" x2="4.33" y2="19.37" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-7" x1="4.21" y1="19.39" x2="4.33" y2="19.39" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-8" x1="4.21" y1="19.39" x2="4.33" y2="19.39" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-9" x1="4.21" y1="19.44" x2="4.33" y2="19.44" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-10" x1="4.21" y1="19.45" x2="4.33" y2="19.45" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-11" x1="4.21" y1="19.39" x2="4.33" y2="19.39" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-12" x1="-7.67" y1="13.12" x2="-7.55" y2="13.12" gradientTransform="matrix(-16.88, 63.33, 63.33, 16.88, -953.42, 279.41)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#b8ffff" />
        <stop offset="0.29" stopColor="#5295d9" />
        <stop offset="0.79" stopColor="#262d3a" />
        <stop offset="1" stopColor="#262d3a" />
      </linearGradient>
      <linearGradient id="linear-gradient-13" x1="4.21" y1="19.39" x2="4.33" y2="19.39" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-14" x1="-7.67" y1="13.12" x2="-7.55" y2="13.12" xlinkHref="#linear-gradient-12" />
      <linearGradient id="linear-gradient-15" x1="4.21" y1="19.4" x2="4.33" y2="19.4" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-16" x1="-7.67" y1="13.13" x2="-7.55" y2="13.13" xlinkHref="#linear-gradient-12" />
      <linearGradient id="linear-gradient-17" x1="4.29" y1="19.39" x2="4.3" y2="19.39" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-18" x1="-7.67" y1="13.11" x2="-7.64" y2="13.11" xlinkHref="#linear-gradient-12" />
      <linearGradient id="linear-gradient-19" x1="-7.67" y1="13.11" x2="-7.55" y2="13.11" xlinkHref="#linear-gradient-12" />
      <linearGradient id="linear-gradient-20" x1="-7.67" y1="13.13" x2="-7.55" y2="13.13" xlinkHref="#linear-gradient-12" />
      <linearGradient id="linear-gradient-21" x1="-7.67" y1="13.15" x2="-7.55" y2="13.15" xlinkHref="#linear-gradient-12" />
      <linearGradient id="linear-gradient-22" x1="4.21" y1="19.35" x2="4.33" y2="19.35" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-23" x1="-15.26" y1="19.59" x2="-15.14" y2="19.59" gradientTransform="matrix(29.35, 49.63, 49.63, -29.35, -515.51, 1340.03)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#909a9d" />
        <stop offset="0.13" stopColor="#6f81a9" />
        <stop offset="1" stopColor="#262d3a" />
      </linearGradient>
      <radialGradient id="radial-gradient-5" cx="-76.92" cy="83.82" r="0.12" gradientTransform="matrix(8.77, 0, 0, -8.88, 684.58, 755.08)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fff" />
        <stop offset="0.67" stopColor="#5295d9" />
        <stop offset="1" stopColor="#24267e" />
      </radialGradient>
      <linearGradient id="linear-gradient-24" x1="-9.4" y1="20.51" x2="-9.28" y2="20.51" gradientTransform="matrix(33.64, 79.61, 79.61, -33.64, -1315.06, 1437.38)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fff" />
        <stop offset="0.3" stopColor="#838b8b" />
        <stop offset="1" stopColor="#fff" />
      </linearGradient>
      <linearGradient id="linear-gradient-25" x1="4.21" y1="19.33" x2="4.33" y2="19.33" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-26" x1="-9.4" y1="20.51" x2="-9.28" y2="20.51" xlinkHref="#linear-gradient-24" />
      <linearGradient id="linear-gradient-27" x1="4.21" y1="19.27" x2="4.33" y2="19.27" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-28" x1="-9.4" y1="20.51" x2="-9.28" y2="20.51" xlinkHref="#linear-gradient-24" />
      <linearGradient id="linear-gradient-29" x1="4.21" y1="19.31" x2="4.33" y2="19.31" xlinkHref="#linear-gradient" />
      <linearGradient id="linear-gradient-30" x1="-9.4" y1="20.52" x2="-9.28" y2="20.52" xlinkHref="#linear-gradient-24" />
    </defs>
    <path d="M4.62,4.21l0,0c.16.3.33.61.5.94C5,4.84,4.81,4.54,4.62,4.21Z" fill="none" />
    <path d="M11.19,20.72a3.69,3.69,0,0,0,1.9-.55c-.2-.16-.42-.34-.64-.55A4.75,4.75,0,0,1,11.19,20.72Z" fill="url(#radial-gradient)" />
    <path d="M13.22,20.77a2.91,2.91,0,0,0,.69-.14l-.37-.18Z" fill="url(#radial-gradient-2)" />
    <path d="M7,12.59c-.07.23-.13.43-.18.62.15-.52.32-1,.45-1.51C7.13,12,7,12.31,7,12.59Z" fill="url(#linear-gradient)" />
    <path d="M16.47,16.47a7.08,7.08,0,0,1-.7-.74,4.57,4.57,0,0,1-.88-2.38A4.43,4.43,0,0,0,16,16.07Z" fill="url(#linear-gradient-2)" />
    <path d="M14.36,20.44a3.81,3.81,0,0,1-.45.19,2,2,0,0,0,.52.14C14.32,20.78,14.31,20.64,14.36,20.44Z" fill="url(#linear-gradient-3)" />
    <path d="M17.76,17.59c.19.21.27.38.17.55a9.31,9.31,0,0,1-2.1,2,4.39,4.39,0,0,1-.56.36h0a2,2,0,0,1-.84.3C15.4,20.85,18,18.44,18,18A.65.65,0,0,0,17.76,17.59Z" fill="url(#linear-gradient-4)" />
    <path d="M14.8,19.39a6.09,6.09,0,0,1,.43-.77,2.8,2.8,0,0,0,2.37-.25.91.91,0,0,0,.2-.33c0-.16-.06-.33-1.21-1.2a4.39,4.39,0,0,1-1.71-3.74s1.86-1.66-2.83-7A18.52,18.52,0,0,0,1.5,0,16.37,16.37,0,0,1,4.6,4.18l0,0c.19.33.35.63.48.91a.08.08,0,0,0,0,0A3.19,3.19,0,0,1,5.44,8a4.33,4.33,0,0,1,.83.34A4.49,4.49,0,0,0,5.51,8C6.4,8.28,8.19,9,7.67,11.09c-.58,2.33-.55,2.61-.42,3.18a4,4,0,0,0,.21.75,3,3,0,0,1,.76.19l.34.12s-1.41.7-.54,4c.62,2.37,1.39,3.14,1.17,3.51s-1,1-2.71,0c-.63-.39-1-3.78-.82-6.29a29.93,29.93,0,0,1,1.39-5.89C7.52,8.78,5.44,8,5.44,8L5.09,7.9h0a7.88,7.88,0,0,0-.82-.11A5.33,5.33,0,0,0,.79,8.91a7.54,7.54,0,0,0-.28,4.27,4.05,4.05,0,0,1-.29-2.29c.14-1.6.33-2.05.44-2.17a6.08,6.08,0,0,1,2.86-.94,5.8,5.8,0,0,0-2.91.85c-.72.45-.82,4.44-.2,5.32a18.89,18.89,0,0,0,3.67,2.52c-.36-.26-.81-.47-1.33-.8A8.53,8.53,0,0,1,.33,13.8a6.48,6.48,0,0,1-.28-1.53c.28,2.2,3.34,3.42,4.44,3.63s1,1.86,1,3.74S4.72,22.3,4.83,22a5.57,5.57,0,0,0,.4-3,4.12,4.12,0,0,0-.56-1.9,6.37,6.37,0,0,1,.17,4.83c-.67,1.51.67,1.81,1.79,2s2.6-.15,2.9-.75-1-2-1.49-4.74.82-3,.82-3,.59.15,1.48,1.58a13.08,13.08,0,0,0,2.11,2.61,1.45,1.45,0,0,0,.27-.55l.67.91s-.11.08-.3.19c.16.11.31.2.45.28A4.67,4.67,0,0,0,14.48,19ZM7.52,24c-1.75.11-3.62-1.28-1.23-1.15a2.63,2.63,0,0,0,1.56.64,2.48,2.48,0,0,0,1.53-.28S9.43,23.84,7.52,24ZM9.36,12.42a1.51,1.51,0,0,1-1.43-1.54c-.09-1,.89-2.3-.65-4.82a6.28,6.28,0,0,1,1,2,4.8,4.8,0,0,1,0,1.55c0-.19,0-.41.06-.64a4.86,4.86,0,0,0-1.17-3.1L7.3,6S8.66,7.81,9.72,9.55a11.34,11.34,0,0,1,1,1.88,3.06,3.06,0,0,0,.92,1.33,3.37,3.37,0,0,0,2.3.85,3.78,3.78,0,0,1-2.33-1c-.9-1.14-3-8.33-9.86-12.54A20.41,20.41,0,0,1,11.61,5.8c3.93,4.48,3.77,6,3.17,7.32a.78.78,0,0,1-.51.43l.2-.07c.22-.09.33-.19.36-.13.12.28-1.22,1.52-3.92-.6l.1.1A2.78,2.78,0,0,0,9.36,12.42Zm1.34.28s2.73,2.21,4.05,1.13a5.33,5.33,0,0,0,1.39,2.68c1,.85,1.84,1.4,1.59,1.65a4.58,4.58,0,0,1-2.43.3c-.45-.2.09-.8-1.24-1.6A7.66,7.66,0,0,1,10.7,12.7Zm2.88,4.95c-.59-1.14-.89-.87-1.24-1.79A4.12,4.12,0,0,0,13.77,17c.93.47.94.81.93,1S14.17,18.79,13.58,17.65Z" fill="url(#linear-gradient-5)" />
    <path d="M8.7,11.58a2.28,2.28,0,0,0,1,.59L9.42,12A2.56,2.56,0,0,1,8.7,11.58Z" fill="url(#linear-gradient-6)" />
    <path d="M6.42,14.63a3.72,3.72,0,0,0-.06.37h0A2.58,2.58,0,0,1,6.42,14.63Z" fill="url(#linear-gradient-7)" />
    <path d="M7,15h.11l.3,0a2.36,2.36,0,0,0-1,0l.44,0Z" fill="url(#linear-gradient-8)" />
    <path d="M12.72,19.07a1.45,1.45,0,0,1-.27.55c.22.21.44.39.64.55.19-.11.3-.19.3-.19Z" fill="url(#radial-gradient)" />
    <path d="M12.72,19.07a1.45,1.45,0,0,1-.27.55c.22.21.44.39.64.55.19-.11.3-.19.3-.19Z" fill="url(#linear-gradient-9)" />
    <path d="M14.8,19.39,14.48,19a4.67,4.67,0,0,1-.94,1.41l.37.18a3.81,3.81,0,0,0,.45-.19A5.67,5.67,0,0,1,14.8,19.39Z" fill="url(#radial-gradient-2)" />
    <path d="M14.8,19.39,14.48,19a4.67,4.67,0,0,1-.94,1.41l.37.18a3.81,3.81,0,0,0,.45-.19A5.67,5.67,0,0,1,14.8,19.39Z" fill="url(#linear-gradient-10)" />
    <path d="M6.59,8.53a1.89,1.89,0,0,1,.59.65s0,0,0,.05a1.51,1.51,0,0,1,.13.29l0,.1c0,.11,0,.22.07.33a.86.86,0,0,0,0,.16,1.76,1.76,0,0,1,0,.23v.18l0,.25a.68.68,0,0,1,0,.14c0,.13,0,.27-.07.4s0,.09,0,.14l-.06.25c-.13.48-.3,1-.45,1.51a13,13,0,0,0-.35,1.42,2.58,2.58,0,0,0-.06.37h.07a2.36,2.36,0,0,1,1,0h0a4,4,0,0,1-.21-.75c-.13-.57-.16-.85.42-3.18C8.19,9,6.4,8.28,5.51,8a4.49,4.49,0,0,1,.76.37l.23.14Z" fill="#d4d7d8" />
    <path d="M14.78,13.12c.6-1.3.76-2.84-3.17-7.32A20.41,20.41,0,0,0,1.72.05c6.84,4.21,9,11.4,9.86,12.54a3.78,3.78,0,0,0,2.33,1,1.68,1.68,0,0,0,.36-.06A.78.78,0,0,0,14.78,13.12Z" fill="#7e8789" />
    <path d="M14.06,16.86c1.33.8.79,1.4,1.24,1.6a4.58,4.58,0,0,0,2.43-.3c.25-.25-.55-.8-1.59-1.65a5.33,5.33,0,0,1-1.39-2.68c-1.32,1.08-4.05-1.13-4.05-1.13A7.66,7.66,0,0,0,14.06,16.86Z" fill="#7e8789" />
    <path d="M17.6,18.37a2.8,2.8,0,0,1-2.37.25,6.09,6.09,0,0,0-.43.77,5.67,5.67,0,0,0-.44,1.05c0,.2,0,.34.07.33a2,2,0,0,0,.84-.3A14.24,14.24,0,0,0,17.6,18.37Z" fill="#b1b2b2" />
    <path d="M7.05,10.59a29.93,29.93,0,0,0-1.39,5.89c-.22,2.51.19,5.9.82,6.29,1.66,1,2.5.4,2.71,0S8.64,21.66,8,19.29c-.87-3.26.54-4,.54-4l-.34-.12,0,0s-1.33.68-.69,3.54,1.55,3.81,1.32,4a2.14,2.14,0,0,1-2.31-.42c-.4-.55-.66-1.37-.6-4A16.11,16.11,0,0,1,6.36,15a3.72,3.72,0,0,1,.06-.37,13,13,0,0,1,.35-1.42c.05-.19.11-.39.18-.62s.18-.59.27-.89l.06-.25s0-.09,0-.14,0-.27.07-.4a.68.68,0,0,0,0-.14l0-.25v-.18a1.76,1.76,0,0,0,0-.23.86.86,0,0,1,0-.16c0-.11,0-.22-.07-.33l0-.1a1.51,1.51,0,0,0-.13-.29s0,0,0-.05a1.89,1.89,0,0,0-.59-.65L6.5,8.46l-.23-.14A4.33,4.33,0,0,0,5.44,8S7.52,8.78,7.05,10.59Z" fill="#7e8789" />
    <path d="M7.47,15l0,0-.3,0Z" fill="url(#linear-gradient-11)" />
    <path d="M7.47,15l0,0-.3,0Z" fill="url(#linear-gradient-12)" />
    <path d="M7,15H6.87l-.44,0H6.36A5.91,5.91,0,0,1,7,15Z" fill="url(#linear-gradient-13)" />
    <path d="M7,15H6.87l-.44,0H6.36A5.91,5.91,0,0,1,7,15Z" fill="url(#linear-gradient-14)" />
    <path d="M8.22,15.21A3,3,0,0,0,7.46,15h0A7,7,0,0,1,8.22,15.21Z" fill="url(#linear-gradient-15)" />
    <path d="M8.22,15.21A3,3,0,0,0,7.46,15h0A7,7,0,0,1,8.22,15.21Z" fill="url(#linear-gradient-16)" />
    <polygon points="6.36 15 6.36 15 6.36 15 6.36 15" fill="url(#linear-gradient-17)" />
    <polygon points="6.36 15 6.36 15 6.36 15 6.36 15" fill="url(#linear-gradient-18)" />
    <path d="M6.43,15h0Z" fill="#d4d7d8" />
    <path d="M6.43,15h0Z" fill="url(#linear-gradient-19)" />
    <path d="M7.47,15h0Z" fill="#d4d7d8" />
    <path d="M7.47,15h0Z" fill="url(#linear-gradient-20)" />
    <path d="M7.14,15H7a5.91,5.91,0,0,0-.67,0h0A16.11,16.11,0,0,0,6,18.36c-.06,2.65.2,3.47.6,4a2.14,2.14,0,0,0,2.31.42c.23-.22-.68-1.17-1.32-4s.69-3.54.69-3.54l0,0A7,7,0,0,0,7.47,15Z" fill="#7e8789" />
    <path d="M7.14,15H7a5.91,5.91,0,0,0-.67,0h0A16.11,16.11,0,0,0,6,18.36c-.06,2.65.2,3.47.6,4a2.14,2.14,0,0,0,2.31.42c.23-.22-.68-1.17-1.32-4s.69-3.54.69-3.54l0,0A7,7,0,0,0,7.47,15Z" fill="url(#linear-gradient-21)" />
    <path d="M8.25,10.2a3,3,0,0,0,0,.51,1.69,1.69,0,0,0,.42.87,2.56,2.56,0,0,0,.72.46l.29.13.06,0a3.42,3.42,0,0,1,1.14.56c2.7,2.12,4,.88,3.92.6,0-.06-.14,0-.36.13l-.2.07a1.68,1.68,0,0,1-.36.06,3.37,3.37,0,0,1-2.3-.85,3.06,3.06,0,0,1-.92-1.33l.05.12c-.12.26-1.08.77-1.82-.32-.57-.84-.18-2.22.5-2.13l.3.45C8.66,7.81,7.3,6,7.3,6l-.13-.14A4.86,4.86,0,0,1,8.34,9c0,.23-.05.45-.06.64v.05C8.26,9.85,8.25,10,8.25,10.2Z" fill="url(#linear-gradient-22)" />
    <path d="M8.25,10.2a3,3,0,0,0,0,.51,1.69,1.69,0,0,0,.42.87,2.56,2.56,0,0,0,.72.46l.29.13.06,0a3.42,3.42,0,0,1,1.14.56c2.7,2.12,4,.88,3.92.6,0-.06-.14,0-.36.13l-.2.07a1.68,1.68,0,0,1-.36.06,3.37,3.37,0,0,1-2.3-.85,3.06,3.06,0,0,1-.92-1.33l.05.12c-.12.26-1.08.77-1.82-.32-.57-.84-.18-2.22.5-2.13l.3.45C8.66,7.81,7.3,6,7.3,6l-.13-.14A4.86,4.86,0,0,1,8.34,9c0,.23-.05.45-.06.64v.05C8.26,9.85,8.25,10,8.25,10.2Z" fill="url(#linear-gradient-23)" />
    <path d="M8.92,11.23c.74,1.09,1.7.58,1.82.32l-.05-.12a11.34,11.34,0,0,0-1-1.88l-.3-.45C8.74,9,8.35,10.39,8.92,11.23Zm1.7.25c-.11.22-.83.65-1.47-.23-.5-.69-.14-1.89.34-1.94A9.48,9.48,0,0,1,10.62,11.48Z" />
    <path d="M9.15,11.25c.64.88,1.36.45,1.47.23A9.48,9.48,0,0,0,9.49,9.31C9,9.36,8.65,10.56,9.15,11.25Z" />
    <path d="M9.15,11.25c.64.88,1.36.45,1.47.23A9.48,9.48,0,0,0,9.49,9.31C9,9.36,8.65,10.56,9.15,11.25Z" fill="url(#radial-gradient-5)" />
    <path d="M14.7,18.05c0-.21,0-.55-.93-1a4.12,4.12,0,0,1-1.43-1.17c.35.92.65.65,1.24,1.79S14.7,18.27,14.7,18.05Z" fill="#c6cbcc" />
    <path d="M10.91,12.75a3.42,3.42,0,0,0-1.14-.56l-.06,0a2.28,2.28,0,0,1-1-.59,1.69,1.69,0,0,1-.42-.87,3,3,0,0,1,0-.51c0-.17,0-.35,0-.55V9.6a4.8,4.8,0,0,0,0-1.55,6.28,6.28,0,0,0-1-2c1.54,2.52.56,3.78.65,4.82a1.51,1.51,0,0,0,1.43,1.54,2.78,2.78,0,0,1,1.65.43Z" fill="#7e8789" />
    <path d="M6.29,22.8C3.9,22.67,5.77,24.06,7.52,24c1.91-.11,1.86-.79,1.86-.79a2.48,2.48,0,0,1-1.53.28A2.63,2.63,0,0,1,6.29,22.8Z" fill="#b1b2b2" />
    <path d="M4.83,22c-.11.34.61-.43.63-2.32s.13-3.53-1-3.74S.33,14.47.05,12.27A6.48,6.48,0,0,0,.33,13.8a8.53,8.53,0,0,0,2.42,1.87c.52.33,1,.54,1.33.8a2.25,2.25,0,0,1,.59.6A4.12,4.12,0,0,1,5.23,19,5.57,5.57,0,0,1,4.83,22Z" fill="#d4d7d8" />
    <path d="M.22,10.89a4.05,4.05,0,0,0,.29,2.29A7.54,7.54,0,0,1,.79,8.91,5.33,5.33,0,0,1,4.27,7.79h.16a5.53,5.53,0,0,0-.91,0,6.08,6.08,0,0,0-2.86.94C.55,8.84.36,9.29.22,10.89Z" fill="#7e8789" />
    <path d="M5.1,5.12c-.17-.33-.34-.64-.5-.94A19.42,19.42,0,0,0,1.5,0S6.29,5.47,5.09,7.9A3.35,3.35,0,0,1,5.44,8S5.94,7,5.1,5.12Z" fill="url(#linear-gradient-24)" />
    <path d="M5.44,8a3.35,3.35,0,0,0-.35-.08h0Z" fill="url(#linear-gradient-25)" />
    <path d="M5.44,8a3.35,3.35,0,0,0-.35-.08h0Z" fill="url(#linear-gradient-26)" />
    <path d="M4.6,4.18A16.37,16.37,0,0,0,1.5,0,19.42,19.42,0,0,1,4.6,4.18Z" fill="url(#linear-gradient-27)" />
    <path d="M4.6,4.18A16.37,16.37,0,0,0,1.5,0,19.42,19.42,0,0,1,4.6,4.18Z" fill="url(#linear-gradient-28)" />
    <path d="M5.44,8a3.19,3.19,0,0,0-.32-2.81.08.08,0,0,1,0,0C5.94,7,5.44,8,5.44,8Z" fill="url(#linear-gradient-29)" />
    <path d="M5.44,8a3.19,3.19,0,0,0-.32-2.81.08.08,0,0,1,0,0C5.94,7,5.44,8,5.44,8Z" fill="url(#linear-gradient-30)" />
    <path d="M16.59,16.84c1.15.87,1.22,1,1.21,1.2a.91.91,0,0,1-.2.33,14.24,14.24,0,0,1-2.33,2.1h0a4.39,4.39,0,0,0,.56-.36,9.31,9.31,0,0,0,2.1-2c.1-.17,0-.34-.17-.55S17,17,16.47,16.47l-.44-.4a4.43,4.43,0,0,1-1.14-2.72v0c0-.06,0-.11,0-.15V13.1A4.39,4.39,0,0,0,16.59,16.84Z" fill="#b1b2b2" />
  </SVGIcon>
);

LlvmIcon.propTypes = {
  size: PropTypes.number
};

LlvmIcon.defaultProps = {
  size: 22,
};

export default LlvmIcon;
