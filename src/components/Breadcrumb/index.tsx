import { ReactNode } from "react";

interface BreadcrumbProps {
  className?: string;
  items: string[];
  separator?: ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  className,
  items,
  separator = "/",
}) => {
  return (
    <div className={className}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 9,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: 9 }}
          >
            <span>{item}</span>
            {index < items.length - 1 && <span>{separator}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
