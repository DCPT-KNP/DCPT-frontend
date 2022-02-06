interface ISkillsTitleProps {
  title?: string;
}

const SkillsTitle = ({ title = '무제' }: ISkillsTitleProps) => {
  return <h1 className="button ~mingyu">{title}</h1>;
};

export default SkillsTitle;
