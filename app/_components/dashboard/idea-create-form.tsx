"use client";

import CheckboxGroup from "./multiselect-checkbox";

interface IdeaCreateCardProps {}

const roles = [
  { label: "Backend Developer", value: "backend" },
  { label: "Frontend Developer", value: "frontend" },
  { label: "Designer", value: "designer" },
  { label: "DevOps Engineer", value: "devops" },
  { label: "Product Manager", value: "product" },
];
export default function IdeaCreateForm({}: IdeaCreateCardProps) {
  const handleSelectionChange = (
    selectedOptions: Array<{ label: string; value: string }>
  ) => {
    console.log("Selected options:", selectedOptions);
  };
  return (
    <div className="card bg-slate-50 w-96">
      <div className="card-body flex gap-6">
        <h2 className="card-title">
          Build your future product
          <span className="bg-black text-gray-100 px-2">idea</span>
        </h2>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Idea</span>
          </div>
          <input
            type="text"
            placeholder="Future product idea 💡"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            placeholder="Description 🚀"
            className="textarea textarea-bordered w-full max-w-xs"
          />
        </label>
        <CheckboxGroup options={roles} onChange={handleSelectionChange} />
        <div className="card-actions w-full">
          <button className="btn btn-primary w-full">Create Idea</button>
        </div>
      </div>
    </div>
  );
}
