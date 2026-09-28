import { Fragment } from 'react';
import type { CSSProperties } from 'react';

interface Segment {
  text: string;
  gradient?: boolean;
}

interface AnimatedHeadlineProps {
  segments: Segment[];
  className?: string;
}

// Titular con entrada letra a letra. El lector de pantalla recibe el texto completo
// por aria-label; las letras sueltas se ocultan para que no las deletree.
export default function AnimatedHeadline({ segments, className }: AnimatedHeadlineProps) {
  const label = segments.map((s) => s.text).join(' ');
  let letterIndex = 0;

  return (
    <h1 aria-label={label} className={className}>
      {segments.map((segment, si) => {
        const words = segment.text.split(' ');
        const letterCount = segment.text.replace(/ /g, '').length;
        let inSegment = 0;

        return (
          <Fragment key={si}>
            <span aria-hidden="true">
              {words.map((word, wi) => (
                <Fragment key={wi}>
                  <span className="inline-block whitespace-nowrap">
                    {Array.from(word).map((char, ci) => {
                      const style = { '--i': letterIndex++ } as CSSProperties;
                      if (segment.gradient) {
                        const t = letterCount > 1 ? (inSegment / (letterCount - 1)) * 100 : 0;
                        (style as Record<string, string | number>)['--t'] = `${t.toFixed(1)}%`;
                      }
                      inSegment++;
                      return (
                        <span
                          key={ci}
                          className={`letter-rise${segment.gradient ? ' letter-grad' : ''}`}
                          style={style}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                  {wi < words.length - 1 ? ' ' : null}
                </Fragment>
              ))}
            </span>
            {si < segments.length - 1 ? ' ' : null}
          </Fragment>
        );
      })}
    </h1>
  );
}
