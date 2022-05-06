import React, { useState } from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from '../../desktop-components/Header';
import Docker from '../../desktop-components/Docker';
import Window from '../../desktop-components/Window';

const defaultWins = [
  {
    id: 'win1',
    name: '前端小站',
    path: '/leo/hom',
    icon: 'leetcode.svg',
    opened: false,
    active: false,
  },
  {
    id: 'win2',
    name: 'Markdown Editor',
    path: 'https://renhongl.github.io/markdown-editor/',
    icon: 'graph.png',
    opened: false,
    active: false,
  },
  {
    id: 'win3',
    name: 'Code Online',
    path: 'https://renhongl.github.io/code-online/#/',
    icon: 'js.png',
    opened: false,
  },
];

export default function Home() {
  const [wins, setWins] = useState(defaultWins);

  function toggleWin(id) {
    setWins((wins) => {
      const newWins = [...wins];
      for (let item of newWins) {
        if (item.id === id) {
          item.opened = !item.opened;
          if (item.opened) {
            toggleActive(id);
          }
          break;
        }
      }
      return newWins;
    });
  }

  function toggleActive(id) {
    setWins((wins) => {
      const newWins = [...wins];
      for (let item of newWins) {
        if (item.id === id) {
          item.active = true;
        } else {
          item.active = false;
        }
      }
      return newWins;
    });
  }

  return (
    <section
      style={{
        backgroundImage: 'url(' + useBaseUrl('/home/home-bg.jpg') + ')',
      }}
      className={styles.home}
    >
      <Header></Header>
      <Docker data={wins} toggleWin={toggleWin}></Docker>
      {wins
        .filter((win) => win.opened)
        .map((win) => (
          <Window
            key={win.id}
            data={win}
            toggleWin={toggleWin}
            toggleActive={toggleActive}
          ></Window>
        ))}
    </section>
  );
}