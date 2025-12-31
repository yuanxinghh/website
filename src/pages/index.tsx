import { type ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import { Page, Codepen, CollageFrame, DashboardSpeed } from 'iconoir-react';
import { Animator, Animated, aaVisibility, aa, BleepsOnAnimator } from '@arwes/react';
import type { BleepNames } from '@app/types';
import { Button } from '@app/ui';
import { hiddenSMDown } from '@app/styles';

const ITCH_URL = 'https://yuanxing-federation-clt.itch.io/';

const PageIndex = (): ReactElement => {
  const [openItch, setOpenItch] = useState(false);
  const [iframeBlocked, setIframeBlocked] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenItch(false);
        setIframeBlocked(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openInNewTab = () => {
    window.open(ITCH_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style jsx global>{`
        .page {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          display: grid;
          row-gap: 1rem;
          padding: 1rem;
        }

        .title {
          display: flex;
          justify-content: center;
          margin: 0;
        }

        .logo {
          margin: 0;
          max-height: 2.5rem;
        }

        .nav {
          display: grid;
          grid-auto-flow: column;
          column-gap: 0.5rem;
        }

        .nav-item,
        .nav-item a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* ===== itch modal ===== */
        .itch-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(2px);
        }

        .itch-window {
          width: min(1100px, 92vw);
          height: min(720px, 92vh);
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;
          display: grid;
          grid-template-rows: auto 1fr auto;
          overflow: hidden;
        }

        .itch-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .itch-title {
          font-size: 14px;
          opacity: 0.9;
        }

        .itch-close {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          cursor: pointer;
        }

        .itch-body {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
        }

        .itch-iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .itch-fallback {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
          font-size: 14px;
          line-height: 1.6;
          opacity: 0.9;
        }

        .itch-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          padding: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        @media (min-width: 768px) {
          .container {
            row-gap: 1.25rem;
          }
          .logo {
            max-height: 14.75rem;
          }
          .nav {
            column-gap: 1rem;
          }
        }
      `}</style>

      <Animator combine manager='sequenceReverse'>
        <BleepsOnAnimator<BleepNames> transitions={{ entering: 'intro' }} continuous />

        <main className='page'>
          <Animated className='container' animated={aa('y', 12, 0)}>
            <Animator>
              <Animated as='h1' className='title' animated={[aaVisibility()]}>
                <img
                  className='logo'
                  src='/logotype.png'
                  alt='Arwes Project'
                />
              </Animated>
            </Animator>

            <Animator>
              <nav className='nav'>
                <Animated className='nav-item' animated={[aaVisibility(), aa('x', -24, 0)]}>
                  <Link href='/docs'>
                    <Button size='small'>
                      <Page className={hiddenSMDown} />
                      <span>成员简介</span>
                    </Button>
                  </Link>
                </Animated>

                <Animated className='nav-item' animated={[aaVisibility(), aa('x', -12, 0)]}>
                  <Link href='/samples'>
                    <Button size='small'>
                      <CollageFrame className={hiddenSMDown} />
                      <span>联系我们</span>
                    </Button>
                  </Link>
                </Animated>

                {/* 作品列表 */}
                <Animated className='nav-item' animated={[aaVisibility(), aa('x', 12, 0)]}>
                  <Button
                    size='small'
                    onClick={() => {
                      setOpenItch(true);
                      setIframeBlocked(false);
                    }}
                  >
                    <Codepen className={hiddenSMDown} />
                    <span>作品列表</span>
                  </Button>
                </Animated>

                <Animated className='nav-item' animated={[aaVisibility(), aa('x', 24, 0)]}>
                  <a href='/perf'>
                    <Button size='small'>
                      <DashboardSpeed className={hiddenSMDown} />
                      <span>兽游书签</span>
                    </Button>
                  </a>
                </Animated>
              </nav>
            </Animator>
          </Animated>
        </main>
      </Animator>

      {/* ===== itch modal ===== */}
      {openItch && (
        <div
          className='itch-overlay'
          onClick={() => {
            setOpenItch(false);
            setIframeBlocked(false);
          }}
        >
          <div className='itch-window' onClick={(e) => e.stopPropagation()}>
            <div className='itch-header'>
              <div className='itch-title'>作品列表 · Yuanxing Federation (itch.io)</div>
              <button
                className='itch-close'
                onClick={() => {
                  setOpenItch(false);
                  setIframeBlocked(false);
                }}
              >
                ✕
              </button>
            </div>

            <div className='itch-body'>
              {!iframeBlocked ? (
                <iframe
                  className='itch-iframe'
                  src={ITCH_URL}
                  title='itch.io'
                  referrerPolicy='no-referrer'
                  onLoad={() => {
                    // 被 CSP / X-Frame-Options 拦时，浏览器会显示“拒绝连接”
                    // 无法通过 JS 精确判断，只能给用户切换权
                  }}
                />
              ) : (
                <div className='itch-fallback'>
                  该站点禁止被嵌入到 iframe（浏览器会显示“拒绝连接”）。<br />
                  请使用下方按钮在新标签页打开。
                </div>
              )}
            </div>

            <div className='itch-actions'>
              {!iframeBlocked && (
                <Button size='small' onClick={() => setIframeBlocked(true)}>
                  <span>无法显示？切换打开方式</span>
                </Button>
              )}
              <Button size='small' onClick={openInNewTab}>
                <span>在新标签页打开</span>
              </Button>
              <Button
                size='small'
                onClick={() => {
                  setOpenItch(false);
                  setIframeBlocked(false);
                }}
              >
                <span>关闭</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageIndex;
