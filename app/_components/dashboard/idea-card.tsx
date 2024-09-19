import React, { useState } from "react";

type IdeaCardProps = {
  title: string;
};

const resources = [
  { label: "Backend Developer", value: "backend" },
  { label: "Designer", value: "designer" },
  { label: "Product Manager", value: "product" },
];

function IdeaCard({ title }: IdeaCardProps) {
  const [liked, setLiked] = useState(false);
  const handleLiked = () => {
    setLiked(true);
  };
  return (
    <div className="card bg-slate-50 shadow-md hover:shadow-xl transition-shadow duration-300 w-full p-1">
      <div className="card-body flex gap-4">
        <div className="card-title flex flex-row justify-between">
          <h2 className="text-black">{title}</h2>
          <button
            className="btn btn-sm  bg-primary text-primary-content hover:bg-primary"
            onClick={handleLiked}
          >
            {liked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-primary-content"
              >
                <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-primary-content"
              >
                <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
              </svg>
            )}
          </button>
        </div>
        <div className="flex gap-2 flex-col">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
            unde quo suscipit numquam quidem cumque asperiores cupiditate.
          </p>
        </div>
        <hr />
        <div className="card-actions flex flex-row justify-between">
          <div className="flex gap-3 flex-row">
            {resources.map((resource) => (
              <span
                key={resource.value}
                className="badge badge-ghost bg-slate-100 font-bold"
              >
                {resource.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaCard;
