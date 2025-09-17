import React, { useState, useMemo } from 'react';
import { usePortfolioStore } from '../../store/portfolioStore';

const SkillsEditor = () => {
  // Grab portfolio + a compatible update function (supports both naming styles)
  const currentPortfolio = usePortfolioStore((s) => s.currentPortfolio);
  const updateSection =
    usePortfolioStore((s) => s.updatePortfolioSection) ||
    usePortfolioStore((s) => s.updateSection);

  // Safe access with fallbacks
  const skills = currentPortfolio?.sections?.skills || { items: [] };
  const items = Array.isArray(skills.items) ? skills.items : [];

  const [newSkill, setNewSkill] = useState({
    name: '',
    level: 'Intermediate',
    category: 'Technical',
  });

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const skillCategories = ['Technical', 'Soft Skills', 'Languages', 'Tools', 'Frameworks'];

  const genId = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    return `skill_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    // fallback for older browsers
  };

  const saveItems = (nextItems) => {
    // Preserve other fields under skills if you add any later
    updateSection('skills', { ...skills, items: nextItems });
  };

  const handleAddSkill = () => {
    const name = newSkill.name.trim();
    if (!name) return;
    const next = [
      ...items,
      {
        id: genId(),
        name,
        level: newSkill.level,
        category: newSkill.category,
      },
    ];
    saveItems(next);
    setNewSkill({ name: '', level: 'Intermediate', category: 'Technical' });
  };

  const handleUpdateSkill = (skillId, field, value) => {
    const next = items.map((skill) =>
      skill.id === skillId ? { ...skill, [field]: value } : skill
    );
    saveItems(next);
  };

  const handleRemoveSkill = (skillId) => {
    const next = items.filter((skill) => skill.id !== skillId);
    saveItems(next);
  };

  const groupedSkills = useMemo(() => {
    const groups = {};
    for (const category of skillCategories) groups[category] = [];
    for (const skill of items) {
      const cat = skill.category && groups.hasOwnProperty(skill.category)
        ? skill.category
        : 'Technical';
      groups[cat].push(skill);
    }
    return groups;
  }, [items]); // categories are static

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-2xl">🛠️</span>
          Skills Section
        </h2>
        <p className="text-base-content/70 mb-6">
          Highlight your technical and soft skills to show your capabilities.
        </p>
      </div>

      {/* Add New Skill */}
      <div className="card bg-base-100 border border-primary/20">
        <div className="card-body">
          <h3 className="card-title text-lg">Add New Skill</h3>
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Skill Name</span>
                <span className="label-text-alt text-error">Required</span>
              </label>
              <input
                type="text"
                placeholder="Skill name (e.g., React, JavaScript)"
                className="input input-bordered w-full"
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Skill Level</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={newSkill.level}
                  onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                >
                  {skillLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Category</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                >
                  {skillCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddSkill}
            className="btn btn-primary btn-sm w-fit"
            disabled={!newSkill.name.trim()}
          >
            Add Skill
          </button>
        </div>
      </div>

      {/* Skills by Category */}
      {skillCategories.map(
        (category) =>
          groupedSkills[category]?.length > 0 && (
            <div key={category} className="card bg-base-100">
              <div className="card-body">
                <h3 className="card-title">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedSkills[category].map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center justify-between p-3 bg-base-200 rounded-lg"
                    >
                      <div className="flex-1">
                        <span className="font-medium">{skill.name}</span>
                        <div
                          className={`badge badge-sm ml-2 ${
                            skill.level === 'Expert'
                              ? 'badge-success'
                              : skill.level === 'Advanced'
                              ? 'badge-info'
                              : skill.level === 'Intermediate'
                              ? 'badge-warning'
                              : 'badge-neutral'
                          }`}
                        >
                          {skill.level}
                        </div>
                      </div>

                      
                      <select
                        className="select select-bordered select-xs mr-2"
                        value={skill.level}
                        onChange={(e) => handleUpdateSkill(skill.id, 'level', e.target.value)}
                      >
                        {skillLevels.map((lvl) => (
                          <option key={lvl} value={lvl}>{lvl}</option>
                        ))}
                      </select>
                      

                      <button
                        onClick={() => handleRemoveSkill(skill.id)}
                        className="btn btn-ghost btn-xs text-error"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
      )}

      {/* Empty State */}
      {items.length === 0 && (
        <div className="text-center py-12 bg-base-200 rounded-lg">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-2">No skills added yet</h3>
          <p className="text-base-content/60">Add your skills to showcase your expertise</p>
        </div>
      )}
    </div>
  );
};

export default SkillsEditor;
