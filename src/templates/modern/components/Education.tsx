import { IEducation } from '@/stores/index.interface';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';
import { dateParser } from '@/helpers/utils';
import { useRef } from 'react';
import { useEducations } from '../../../stores/education';
import { scrollToElement } from '../../../helpers/utils/index';

export const EducationSection = ({ education }: { education: IEducation[] }) => {
  const educationRef = useRef<null | HTMLDivElement>(null);
  useEducations.subscribe(() => {
    scrollToElement(educationRef);
  });

  return (
    <div className="mb-31" ref={educationRef}>
      <SectionHeading title="Education" />

      {education.map((item: IEducation, index: number) => {
        return (
          <div key={index} className="py-2">
            <div>
              <SectionTitle label={`${item.studyType} - ${item.area}`} textSize="md" />
              <div className="">
                <div className="flex justify-between items-center">
                  {' '}
                  <SectionSubtitle label={item.institution} />
                  <p className=" text-xs text-right x">
                    {item.showDate && (
                      <p className="text-xs text-right x">
                        {`${dateParser(item.startDate)}  ${
                          item.isStudyingHere ? '' : dateParser(item.endDate)
                        }`}
                      </p>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
