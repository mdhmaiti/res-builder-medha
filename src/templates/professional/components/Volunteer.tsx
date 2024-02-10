import { IVolunteer } from 'src/stores/index.interface';
import { SectionHeading } from 'src/templates/modern/atoms/SectionHeading';
import { SectionSubtitle } from 'src/templates/modern/atoms/SectionSubtitle';
import { SectionTitle } from 'src/templates/modern/atoms/SectionTitle';
import { dateParser } from 'src/helpers/utils';
import { SectionList } from 'src/templates/modern/atoms/SectionList';
import { HTMLRenderer } from 'src/helpers/common/components/HTMLRenderer';

export const Volunteer = ({ volunteer }: { volunteer: IVolunteer[] }) => {
  return (
    <div className="mb-3">
      {/* <SectionHeading title="Projects" /> */}

      {volunteer.map((item: IVolunteer, index: number) => {
        return (
          <div key={index} className="py-2">
            <div>
              <SectionTitle label={`${item.organization}`} />
              <div className="flex justify-between items-center">
                <SectionSubtitle label={item.position} />
                <div className="flex gap-3">
                  <p className="text-xs">
                    {dateParser(item.startDate)} -
                    {item.isVolunteeringNow ? 'present' : dateParser(item.endDate)}
                  </p>
                </div>
              </div>
              <SectionList>
                <HTMLRenderer htmlString={item.summary} />
              </SectionList>
            </div>
          </div>
        );
      })}
    </div>
  );
};
