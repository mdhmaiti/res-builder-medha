import { HTMLRenderer } from 'src/helpers/common/components/HTMLRenderer';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionText } from '../atoms/SectionText';

export default function AchievementSection({ data }: { data: string }) {
  return (
    <div className="mb-3">
      <SectionHeading title="Achievements" />
      <SectionText>
        <HTMLRenderer htmlString={data} />
      </SectionText>
    </div>
  );
}
