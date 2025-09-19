import React, { useState } from "react";
import { usePortfolioStore } from "../../store/portfolioStore";

const AchievementsEditor = () => {
  const { currentPortfolio, updatePortfolioSection } = usePortfolioStore();
  const { milestones = [], certificates = [] } =
    currentPortfolio.sections.achievements || {};

  const [expandedMilestone, setExpandedMilestone] = useState(null);
  const [expandedCertificate, setExpandedCertificate] = useState(null);

  // 🏆 Milestones
  const handleMilestoneChange = (index, field, value) => {
    const updated = [...milestones];
    updated[index][field] = value;
    updatePortfolioSection("achievements", {
      ...currentPortfolio.sections.achievements,
      milestones: updated,
    });
  };

  const addMilestone = () => {
    updatePortfolioSection("achievements", {
      ...currentPortfolio.sections.achievements,
      milestones: [
        ...milestones,
        { id: Date.now().toString(), number: "", label: "" },
      ],
    });
  };

  const removeMilestone = (id) => {
    const updated = milestones.filter((m) => m.id !== id);
    updatePortfolioSection("achievements", {
      ...currentPortfolio.sections.achievements,
      milestones: updated,
    });
  };

  // 📜 Certificates
  const handleCertificateChange = (index, field, value) => {
    const updated = [...certificates];
    updated[index][field] = value;
    updatePortfolioSection("achievements", {
      ...currentPortfolio.sections.achievements,
      certificates: updated,
    });
  };

  const addCertificate = () => {
    updatePortfolioSection("achievements", {
      ...currentPortfolio.sections.achievements,
      certificates: [
        ...certificates,
        { id: Date.now().toString(), title: "", issuer: "", date: "", link: "" },
      ],
    });
  };

  const removeCertificate = (id) => {
    const updated = certificates.filter((c) => c.id !== id);
    updatePortfolioSection("achievements", {
      ...currentPortfolio.sections.achievements,
      certificates: updated,
    });
  };

  return (
    <div className="space-y-12">
      {/* 🏆 Milestones Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span>🏆</span> Milestones ({milestones.length})
          </h2>
          <button onClick={addMilestone} className="btn btn-primary btn-sm">
            ➕ Add Milestone
          </button>
        </div>

        {milestones.length === 0 ? (
          <div className="text-center py-12 bg-base-200 rounded-lg">
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">No milestones yet</h3>
            <p className="text-base-content/60 mb-4">
              Add your first milestone to highlight career achievements.
            </p>
            <button onClick={addMilestone} className="btn btn-primary">
              Add Your First Milestone
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {milestones.map((m, index) => (
              <div
                key={m.id}
                className="card bg-base-100 border border-base-300"
              >
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <h4 className="card-title text-lg">
                      Milestone {index + 1}: {m.number} {m.label}
                    </h4>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setExpandedMilestone(
                            expandedMilestone === m.id ? null : m.id
                          )
                        }
                        className="btn btn-ghost btn-sm"
                      >
                        {expandedMilestone === m.id ? "▼" : "▶"}
                      </button>
                      <button
                        onClick={() => removeMilestone(m.id)}
                        className="btn btn-ghost btn-sm text-error"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {expandedMilestone === m.id && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">
                            Number
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 6+"
                          className="input input-bordered w-full"
                          value={m.number}
                          onChange={(e) =>
                            handleMilestoneChange(index, "number", e.target.value)
                          }
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Label</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Years Experience"
                          className="input input-bordered w-full"
                          value={m.label}
                          onChange={(e) =>
                            handleMilestoneChange(index, "label", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 📜 Certificates Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span>📜</span> Certificates ({certificates.length})
          </h2>
          <button onClick={addCertificate} className="btn btn-primary btn-sm">
            ➕ Add Certificate
          </button>
        </div>

        {certificates.length === 0 ? (
          <div className="text-center py-12 bg-base-200 rounded-lg">
            <div className="text-6xl mb-4">📑</div>
            <h3 className="text-xl font-semibold mb-2">No certificates yet</h3>
            <p className="text-base-content/60 mb-4">
              Add your certificates to showcase qualifications and
              specializations.
            </p>
            <button onClick={addCertificate} className="btn btn-primary">
              Add Your First Certificate
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {certificates.map((c, index) => (
              <div
                key={c.id}
                className="card bg-base-100 border border-base-300"
              >
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <h4 className="card-title text-lg">
                      Certificate {index + 1}: {c.title || "Untitled"}
                    </h4>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setExpandedCertificate(
                            expandedCertificate === c.id ? null : c.id
                          )
                        }
                        className="btn btn-ghost btn-sm"
                      >
                        {expandedCertificate === c.id ? "▼" : "▶"}
                      </button>
                      <button
                        onClick={() => removeCertificate(c.id)}
                        className="btn btn-ghost btn-sm text-error"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {expandedCertificate === c.id && (
                    <div className="space-y-4 mt-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">
                            Certificate Title
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Google UX Design"
                          className="input input-bordered w-full"
                          value={c.title}
                          onChange={(e) =>
                            handleCertificateChange(index, "title", e.target.value)
                          }
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Issuer</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Coursera, AWS"
                          className="input input-bordered w-full"
                          value={c.issuer}
                          onChange={(e) =>
                            handleCertificateChange(index, "issuer", e.target.value)
                          }
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">Date</span>
                        </label>
                        <input
                          type="month"
                          className="input input-bordered w-full"
                          value={c.date}
                          onChange={(e) =>
                            handleCertificateChange(index, "date", e.target.value)
                          }
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-semibold">
                            Certificate URL
                          </span>
                        </label>
                        <input
                          type="url"
                          placeholder="https://..."
                          className="input input-bordered w-full"
                          value={c.link}
                          onChange={(e) =>
                            handleCertificateChange(index, "link", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Tips */}
      <div className="alert alert-info">
        <svg
          className="w-6 h-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold">Tips for Achievements:</h3>
          <div className="text-sm mt-1">
            <ul className="list-disc list-inside space-y-1">
              <li>
                Use milestones to show measurable career impact (e.g., 500+
                projects).
              </li>
              <li>
                Certificates build credibility — add only recognized or valuable
                ones.
              </li>
              <li>Keep details concise but meaningful.</li>
              <li>Provide links for easy verification when possible.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsEditor;
