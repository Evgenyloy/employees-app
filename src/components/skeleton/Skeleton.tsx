import "./skeleton.scss";

const Skeleton = ({
  width,
  height,
  borderRadius = "4px",
  line,
}: {
  width: string;
  height: string;
  borderRadius?: string;
  line?: string;
}) => {
  return (
    <div
      className={`skeleton skeleton-${line}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};

const Skeletons = () => {
  return (
    <div className="profile-skeleton">
      <Skeleton width="72px" height="72px" borderRadius="50%" />
      <div className="skeleton-wrapper">
        <Skeleton width="200px" height="20px" line="1" />
        <Skeleton width="100px" height="14px" line="2" />
      </div>
    </div>
  );
};

const SkeletonGroup = ({ count = 10 }: { count: number }) => {
  return (
    <div>
      {Array.from({ length: count }).map((_, index) => (
        <Skeletons key={index} />
      ))}
    </div>
  );
};

export default SkeletonGroup;
