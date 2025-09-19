// src/components/editor/SocialProofEditor.jsx
import React from "react";
import { usePortfolioStore } from "../../store/portfolioStore";

const SocialProofEditor = () => {
  const { currentPortfolio, updatePortfolioSection } = usePortfolioStore();
  const { trustedBy = [], feedback = [] } =
    currentPortfolio.sections.socialProof || { trustedBy: [], feedback: [] };

  // --- Trusted By ---
  const addTrustedBy = () => {
    updatePortfolioSection("socialProof", {
      trustedBy: [...trustedBy, { id: Date.now().toString(), logo: "" }],
      feedback,
    });
  };

  const updateTrustedBy = (index, value) => {
    const updated = [...trustedBy];
    updated[index].logo = value;
    updatePortfolioSection("socialProof", { trustedBy: updated, feedback });
  };

  const removeTrustedBy = (index) => {
    const updated = trustedBy.filter((_, i) => i !== index);
    updatePortfolioSection("socialProof", { trustedBy: updated, feedback });
  };

  // --- Feedback ---
  const addFeedback = () => {
    updatePortfolioSection("socialProof", {
      trustedBy,
      feedback: [...feedback, { id: Date.now().toString(), avatar: "", message: "" }],
    });
  };

  const updateFeedback = (index, field, value) => {
    const updated = [...feedback];
    updated[index][field] = value;
    updatePortfolioSection("socialProof", { trustedBy, feedback: updated });
  };

  const removeFeedback = (index) => {
    const updated = feedback.filter((_, i) => i !== index);
    updatePortfolioSection("socialProof", { trustedBy, feedback: updated });
  };

  return (
    <div className="space-y-12">
      {/* Trusted By Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">🤝 Trusted By ({trustedBy.length})</h2>
          <button onClick={addTrustedBy} className="btn btn-primary btn-sm">
            ➕ Add Logo
          </button>
        </div>

        {trustedBy.length === 0 ? (
          <div className="text-center py-8 bg-base-200 rounded-lg">
            <p className="mb-4">No logos yet. Add companies or brands that trust your work.</p>
            <button onClick={addTrustedBy} className="btn btn-primary">
              Add Your First Logo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustedBy.map((logo, i) => (
              <div
                key={logo.id}
                className="p-4 bg-base-100 border rounded flex flex-col gap-2 items-center"
              >
                <input
                  type="url"
                  placeholder="Logo URL"
                  value={logo.logo}
                  onChange={(e) => updateTrustedBy(i, e.target.value)}
                  className="input input-bordered w-full"
                />
                <button
                  onClick={() => removeTrustedBy(i)}
                  className="btn btn-error btn-xs"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Feedback Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">💬 Feedback ({feedback.length})</h2>
          <button onClick={addFeedback} className="btn btn-primary btn-sm">
            ➕ Add Feedback
          </button>
        </div>

        {feedback.length === 0 ? (
          <div className="text-center py-8 bg-base-200 rounded-lg">
            <p className="mb-4">No feedback yet. Add client testimonials here.</p>
            <button onClick={addFeedback} className="btn btn-primary">
              Add Your First Feedback
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {feedback.map((fb, i) => (
              <div key={fb.id} className="card bg-base-100 border">
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Feedback {i + 1}</h4>
                    <button
                      onClick={() => removeFeedback(i)}
                      className="btn btn-error btn-xs"
                    >
                      ✕ Remove
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="form-control">
                      <label className="label">Avatar (Image URL)</label>
                      <input
                        type="url"
                        placeholder="https://..."
                        className="input input-bordered"
                        value={fb.avatar}
                        onChange={(e) => updateFeedback(i, "avatar", e.target.value)}
                      />
                    </div>
                    <div className="form-control md:col-span-2">
                      <label className="label">Message</label>
                      <textarea
                        placeholder="What the client said..."
                        className="textarea textarea-bordered"
                        value={fb.message}
                        onChange={(e) => updateFeedback(i, "message", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialProofEditor;
