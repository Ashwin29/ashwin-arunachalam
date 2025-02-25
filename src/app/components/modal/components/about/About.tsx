'use client';

import { Button } from '@/app/components/foundation/button/Button';
import { useModal } from '../../hooks/useModal';
import { aboutSections } from './AboutConstants';

const AboutModal = () => {
  const { openModal, RenderModal } = useModal();

  return (
    <>
      <Button
        variant='primary'
        text='About'
        onClick={() =>
          openModal({
            title: 'About Us',
            children: (
              <div className='about-content'>
                {aboutSections.map((section, index) => (
                  <div key={index} className='about-section'>
                    <h3 className='text-lg font-semibold'>
                      {section.question}
                    </h3>
                    {section.answer}
                  </div>
                ))}
              </div>
            ),
          })
        }
        className='about-btn'
      />
      <RenderModal />
    </>
  );
};

export { AboutModal };
