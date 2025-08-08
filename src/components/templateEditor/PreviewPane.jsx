import React from 'react';
import PropTypes from 'prop-types';

const PreviewPane = ({ templateId, formData, onClose }) => {
  // Determine which template to render based on templateId
  const renderTemplate = () => {
    // This is a simplified example - in a real app, you'd have more sophisticated template rendering
    switch(templateId) {
      case 'simple-1':
        return renderSimpleTemplate1();
      case 'simple-2':
        return renderSimpleTemplate2();
      case 'custom-1':
        return renderCustomTemplate1();
      case 'custom-2':
        return renderCustomTemplate2();
      default:
        return renderDefaultTemplate();
    }
  };


  // Template rendering functions
  const renderSimpleTemplate1 = () => (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <header style={{ 
        backgroundColor: "#4F46E5", 
        color: "white", 
        padding: "1.5rem", 
        borderTopLeftRadius: "0.5rem", 
        borderTopRightRadius: "0.5rem" 
      }}>
        <h1 style={{ fontSize: "1.875rem", fontWeight: "700", marginBottom: "0.5rem" }}>
          {formData.name || 'Your Name'}
        </h1>
        <p style={{ fontSize: "1.125rem", marginBottom: "0.75rem" }}>
          {formData.jobTitle || 'Your Job Title'}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.5rem", fontSize: "0.875rem" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "1rem", width: "1rem" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {formData.email || 'email@example.com'}
          </span>
          {formData.phone && (
            <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "1rem", width: "1rem" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {formData.phone}
            </span>
          )}
          {formData.location && (
            <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "1rem", width: "1rem" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {formData.location}
            </span>
          )}
        </div>
        {formData.availableForWork && (
          <div style={{ 
            marginTop: "0.75rem", 
            display: "inline-block", 
            backgroundColor: "rgba(34, 197, 94, 0.2)", 
            color: "#22c55e", 
            padding: "0.25rem 0.75rem", 
            borderRadius: "9999px", 
            fontSize: "0.75rem", 
            fontWeight: "500" 
          }}>
            Available for new opportunities
          </div>
        )}
      </header>
      
      <section style={{ padding: "1.5rem", backgroundColor: "white" }}>
        {/* Professional Experience */}
        <h2 style={{ 
          fontSize: "1.25rem", 
          fontWeight: "600", 
          borderBottom: "1px solid #e5e7eb", 
          paddingBottom: "0.5rem", 
          marginBottom: "1rem" 
        }}>
          Professional Experience
        </h2>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontWeight: "500" }}>{formData.company || 'Company Name'}</h3>
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            {formData.experience || '0'} years of experience
          </p>
          <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
            {formData.experienceLevel === 'entry' && 'Entry Level (0-2 years)'}
            {formData.experienceLevel === 'mid' && 'Mid Level (3-5 years)'}
            {formData.experienceLevel === 'senior' && 'Senior (6-9 years)'}
            {formData.experienceLevel === 'expert' && 'Expert (10+ years)'}
          </p>
        </div>

        {/* Skills Section */}
        {(formData.skillsSummary || formData.primarySkills) && (
          <div>
            <h2 style={{ 
              fontSize: "1.25rem", 
              fontWeight: "600", 
              borderBottom: "1px solid #e5e7eb", 
              paddingBottom: "0.5rem", 
              marginBottom: "1rem" 
            }}>
              Skills & Expertise
            </h2>
            {formData.skillsSummary && (
              <p style={{ marginBottom: "1rem" }}>{formData.skillsSummary}</p>
            )}
            {formData.primarySkills && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {formData.primarySkills.split(',').map((skill, index) => (
                  <span 
                    key={index} 
                    style={{ 
                      backgroundColor: "rgba(79, 70, 229, 0.1)", 
                      color: "#4F46E5", 
                      padding: "0.25rem 0.75rem", 
                      borderRadius: "9999px", 
                      fontSize: "0.875rem" 
                    }}
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );

  const renderSimpleTemplate2 = () => (
    <div style={{ fontFamily: "'Georgia', serif" }}>
      <header style={{ 
        backgroundColor: "#0891B2", 
        color: "white", 
        padding: "1.5rem", 
        textAlign: "center", 
        borderTopLeftRadius: "0.5rem", 
        borderTopRightRadius: "0.5rem" 
      }}>
        <h1 style={{ fontSize: "1.875rem", fontWeight: "700", marginBottom: "0.5rem" }}>
          {formData.name || 'Your Name'}
        </h1>
        <p style={{ fontSize: "1.125rem", fontStyle: "italic" }}>
          {formData.headline || formData.jobTitle || 'Professional Headline'}
        </p>
        {formData.location && (
          <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
            {formData.location}
          </p>
        )}
      </header>
      
      <section style={{ padding: "1.5rem", backgroundColor: "white" }}>
        {formData.bio && (
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{ lineHeight: "1.6", fontSize: "1rem" }}>{formData.bio}</p>
          </div>
        )}
        
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          flexWrap: "wrap", 
          gap: "1.5rem", 
          marginBottom: "1rem" 
        }}>
          <div style={{ flex: "1", minWidth: "200px" }}>
            <h2 style={{ 
              fontSize: "1.25rem", 
              fontWeight: "600", 
              marginBottom: "0.75rem", 
              borderBottom: "1px solid #e5e7eb", 
              paddingBottom: "0.5rem" 
            }}>
              Contact Information
            </h2>
            <p style={{ marginBottom: "0.5rem" }}>
              <span style={{ fontWeight: "500" }}>Email: </span>
              {formData.email || 'email@example.com'}
            </p>
            {formData.website && (
              <p style={{ marginBottom: "0.5rem" }}>
                <span style={{ fontWeight: "500" }}>Website: </span>
                {formData.website}
              </p>
            )}
            {formData.phone && (
              <p style={{ marginBottom: "0.5rem" }}>
                <span style={{ fontWeight: "500" }}>Phone: </span>
                {formData.phone}
              </p>
            )}
            {formData.linkedin && (
              <p style={{ marginBottom: "0.5rem" }}>
                <span style={{ fontWeight: "500" }}>LinkedIn: </span>
                {formData.linkedin}
              </p>
            )}
          </div>
          
          <div style={{ flex: "1", minWidth: "200px" }}>
            <h2 style={{ 
              fontSize: "1.25rem", 
              fontWeight: "600", 
              marginBottom: "0.75rem", 
              borderBottom: "1px solid #e5e7eb", 
              paddingBottom: "0.5rem" 
            }}>
              Skills & Expertise
            </h2>
            {formData.skills && (
              <div style={{ marginBottom: "0.75rem" }}>
                <p style={{ fontWeight: "500", marginBottom: "0.25rem" }}>Core Skills:</p>
                <p>{formData.skills}</p>
              </div>
            )}
            {formData.tools && (
              <div style={{ marginBottom: "0.75rem" }}>
                <p style={{ fontWeight: "500", marginBottom: "0.25rem" }}>Tools & Technologies:</p>
                <p>{formData.tools}</p>
              </div>
            )}
            {formData.specialization && (
              <div style={{ marginBottom: "0.75rem" }}>
                <p style={{ fontWeight: "500", marginBottom: "0.25rem" }}>Specialization:</p>
                <p>{formData.specialization}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );

  const renderCustomTemplate1 = () => (
    <div style={{ fontFamily: "'Roboto Mono', monospace" }}>
      <header style={{ 
        background: "linear-gradient(to right, #6366F1, #EC4899)", 
        color: "white", 
        padding: "1.5rem", 
        borderTopLeftRadius: "0.5rem", 
        borderTopRightRadius: "0.5rem" 
      }}>
        <h1 style={{ fontSize: "1.875rem", fontWeight: "700", marginBottom: "0.5rem" }}>
          {formData.projectName || formData.name || 'Project Name'}
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.75rem" }}>
          {formData.client && (
            <span style={{ fontSize: "0.875rem", backgroundColor: "rgba(255,255,255,0.2)", padding: "0.25rem 0.75rem", borderRadius: "9999px" }}>
              Client: {formData.client}
            </span>
          )}
          {formData.year && (
            <span style={{ fontSize: "0.875rem", backgroundColor: "rgba(255,255,255,0.2)", padding: "0.25rem 0.75rem", borderRadius: "9999px" }}>
              Year: {formData.year}
            </span>
          )}
          {formData.projectType && (
            <span style={{ fontSize: "0.875rem", backgroundColor: "rgba(255,255,255,0.2)", padding: "0.25rem 0.75rem", borderRadius: "9999px" }}>
              Type: {formData.projectType}
            </span>
          )}
        </div>
      </header>
      
      <section style={{ padding: "1.5rem", backgroundColor: "white" }}>
        {/* Project Description */}
        {formData.description && (
          <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ 
              fontSize: "1.25rem", 
              fontWeight: "600", 
              marginBottom: "0.75rem", 
              borderBottom: "1px solid #e5e7eb", 
              paddingBottom: "0.5rem" 
            }}>
              Project Overview
            </h2>
            <p style={{ lineHeight: "1.6" }}>{formData.description}</p>
          </div>
        )}
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {/* Design Elements */}
          <div>
            <h2 style={{ 
              fontSize: "1.25rem", 
              fontWeight: "600", 
              marginBottom: "0.75rem", 
              borderBottom: "1px solid #e5e7eb", 
              paddingBottom: "0.5rem" 
            }}>
              Design Elements
            </h2>
            {formData.colorScheme && (
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontWeight: "500", marginBottom: "0.25rem" }}>Color Scheme:</p>
                <p>{formData.colorScheme}</p>
                {formData.customColors && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                    {formData.customColors.split(',').map((color, index) => {
                      const trimmedColor = color.trim();
                      return (
                        <div 
                          key={index} 
                          style={{ 
                            width: "2rem", 
                            height: "2rem", 
                            backgroundColor: trimmedColor,
                            borderRadius: "0.25rem",
                            border: "1px solid #e5e7eb"
                          }}
                          title={trimmedColor}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            )}
            {formData.layout && (
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontWeight: "500", marginBottom: "0.25rem" }}>Layout:</p>
                <p>{formData.layout}</p>
              </div>
            )}
            {formData.typography && (
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontWeight: "500", marginBottom: "0.25rem" }}>Typography:</p>
                <p>{formData.typography}</p>
              </div>
            )}
          </div>
          
          {/* Media & Assets */}
          {(formData.featuredImage || formData.additionalImages || formData.videoUrl) && (
            <div>
              <h2 style={{ 
                fontSize: "1.25rem", 
                fontWeight: "600", 
                marginBottom: "0.75rem", 
                borderBottom: "1px solid #e5e7eb", 
                paddingBottom: "0.5rem" 
              }}>
                Media & Assets
              </h2>
              {formData.featuredImage && (
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Featured Image:</p>
                  <div style={{ 
                    width: "100%", 
                    height: "200px", 
                    backgroundImage: `url(${formData.featuredImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "0.375rem",
                    marginBottom: "0.5rem"
                  }} />
                </div>
              )}
              {formData.additionalImages && (
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Additional Images:</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: "0.5rem" }}>
                    {formData.additionalImages.split('\n').map((url, index) => (
                      url && (
                        <div 
                          key={index} 
                          style={{ 
                            width: "100%", 
                            height: "80px", 
                            backgroundImage: `url(${url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "0.25rem"
                          }} 
                        />
                      )
                    ))}
                  </div>
                </div>
              )}
              {formData.videoUrl && (
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ fontWeight: "500", marginBottom: "0.25rem" }}>Video URL:</p>
                  <p style={{ wordBreak: "break-all" }}>{formData.videoUrl}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );

  const renderCustomTemplate2 = () => {
    return (
      <div className="custom-template-2-preview" style={{
        fontFamily: "'Inter', sans-serif",
        color: "#333",
        maxWidth: "100%",
        margin: "0 auto"
      }}>
        <div className="portfolio-header" style={{ position: "relative", marginBottom: "2rem" }}>
          {formData.coverImage && (
            <div className="cover-image" style={{ 
              backgroundImage: `url(${formData.coverImage})`,
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              borderRadius: "8px",
              marginBottom: "1rem"
            }}>
              {formData.logoUrl && <img className="logo" src={formData.logoUrl} alt="Personal logo" style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                maxWidth: "100px",
                maxHeight: "100px"
              }} />}
            </div>
          )}
          
          <div className="portfolio-intro" style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "1.5rem", 
            padding: "1rem 0" 
          }}>
            {formData.profilePhoto && (
              <div className="profile-photo">
                <img src={formData.profilePhoto} alt={formData.name || 'Profile'} style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }} />
              </div>
            )}
            <div className="intro-text">
              <h1 style={{ fontSize: "2rem", fontWeight: "700", margin: "0 0 0.5rem 0" }}>
                {formData.name || 'Your Name'}
              </h1>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "500", color: "#666", margin: "0 0 0.5rem 0" }}>
                {formData.title || 'Professional Title'}
              </h2>
              {formData.specialty && <p className="specialty" style={{ fontSize: "1rem", color: "#666", margin: "0" }}>
                {formData.specialty}
              </p>}
            </div>
          </div>
        </div>
        
        <div className="portfolio-content" style={{ marginBottom: "2rem" }}>
          <section className="bio-section" style={{ marginBottom: "2rem" }}>
            <h3 style={{ 
              fontSize: "1.5rem", 
              fontWeight: "600", 
              marginBottom: "1rem", 
              paddingBottom: "0.5rem", 
              borderBottom: "2px solid #f0f0f0" 
            }}>About</h3>
            <p>{formData.bio || 'Professional bio not provided'}</p>
          </section>
          
          {formData.gallery && (
            <section className="gallery-section" style={{ marginBottom: "2rem" }}>
              <h3 style={{ 
                fontSize: "1.5rem", 
                fontWeight: "600", 
                marginBottom: "1rem", 
                paddingBottom: "0.5rem", 
                borderBottom: "2px solid #f0f0f0" 
              }}>Portfolio</h3>
              <div className={`gallery-layout ${formData.galleryLayout || 'grid'}`} style={{ 
                display: "grid", 
                gap: "1rem", 
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" 
              }}>
                {formData.gallery.split('\n').map((url, index) => (
                  url && <div key={index} className="gallery-item">
                    <img src={url} alt={`Portfolio work ${index + 1}`} style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "4px",
                      transition: "transform 0.3s ease"
                    }} />
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {formData.video && (
            <section className="video-section" style={{ marginBottom: "2rem" }}>
              <h3 style={{ 
                fontSize: "1.5rem", 
                fontWeight: "600", 
                marginBottom: "1rem", 
                paddingBottom: "0.5rem", 
                borderBottom: "2px solid #f0f0f0" 
              }}>Featured Work</h3>
              <div className="video-container" style={{ 
                position: "relative", 
                paddingBottom: "56.25%", 
                height: "0", 
                overflow: "hidden", 
                borderRadius: "8px" 
              }}>
                <iframe 
                  style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", border: "none" }}
                  src={formData.video.includes('youtube') 
                    ? formData.video.replace('watch?v=', 'embed/') 
                    : formData.video.includes('vimeo') 
                      ? formData.video.replace('vimeo.com/', 'player.vimeo.com/video/') 
                      : formData.video} 
                  title="Featured video"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}
        </div>
        
        <footer className="portfolio-footer" style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "2rem", 
          paddingTop: "2rem", 
          borderTop: "1px solid #eaeaea" 
        }}>
          <div className="contact-info">
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Get in Touch</h3>
            {formData.email && (
              <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span className="icon">✉️</span> 
                <a href={`mailto:${formData.email}`} style={{ color: "#3182ce", textDecoration: "none" }}>
                  {formData.email}
                </a>
              </p>
            )}
            {formData.phone && (
              <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span className="icon">📞</span> 
                <a href={`tel:${formData.phone}`} style={{ color: "#3182ce", textDecoration: "none" }}>
                  {formData.phone}
                </a>
              </p>
            )}
          </div>
          
          {formData.socialLinks && (
            <div className="social-links">
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Connect</h3>
              <div className="links-container" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {formData.socialLinks.split('\n').map((link, index) => {
                  const [platform, url] = link.split(': ');
                  return platform && url ? (
                    <a 
                      key={index} 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        display: "inline-block",
                        padding: "0.5rem 1rem",
                        backgroundColor: "#f7f7f7",
                        borderRadius: "20px",
                        color: "#333",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "all 0.2s ease"
                      }}
                    >
                      {platform}
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          )}
          
          {formData.contactForm && (
            <div className="contact-form-preview" style={{ 
              backgroundColor: "#f9f9f9", 
              padding: "1rem", 
              borderRadius: "8px", 
              borderLeft: "4px solid #3182ce" 
            }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>Contact Form</h3>
              <p>A contact form will be included in your portfolio</p>
            </div>
          )}
        </footer>
      </div>
    );
  };

  const renderDefaultTemplate = () => (
    <div style={{ padding: "1.5rem", fontFamily: "'Inter', sans-serif" }}>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.75rem" }}>
        Template Preview
      </h2>
      <div style={{ 
        padding: "1rem", 
        backgroundColor: "#f9fafb", 
        borderRadius: "0.5rem", 
        marginBottom: "1.5rem",
        border: "1px solid #e5e7eb" 
      }}>
        <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "0.5rem" }}>
          <span style={{ fontWeight: "500", color: "#374151" }}>Template ID:</span> {templateId || 'None selected'}
        </p>
        <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
          <span style={{ fontWeight: "500", color: "#374151" }}>Status:</span> Waiting for template selection
        </p>
      </div>
      
      <h3 style={{ fontSize: "1rem", fontWeight: "500", marginBottom: "0.75rem" }}>
        Form Data Preview
      </h3>
      <div style={{ 
        backgroundColor: "#f3f4f6", 
        padding: "1rem", 
        borderRadius: "0.5rem", 
        border: "1px solid #e5e7eb",
        maxHeight: "300px",
        overflow: "auto" 
      }}>
        <pre style={{ 
          fontSize: "0.75rem", 
          fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
          margin: 0,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word" 
        }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
      
      <div style={{ 
        marginTop: "1.5rem", 
        padding: "1rem", 
        backgroundColor: "#eff6ff", 
        borderRadius: "0.5rem", 
        borderLeft: "4px solid #3b82f6" 
      }}>
        <p style={{ fontSize: "0.875rem", color: "#1e40af" }}>
          Please select a template from the available options to see a preview of your content.
        </p>
      </div>
    </div>
  );

  return (
    <div style={{ 
      border: "1px solid #e2e8f0", 
      borderRadius: "0.5rem", 
      overflow: "hidden", 
      height: "100%", 
      display: "flex", 
      flexDirection: "column", 
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" 
    }}>
      <div style={{ 
        backgroundColor: "#f8fafc", 
        padding: "1rem", 
        borderBottom: "1px solid #e2e8f0", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center" 
      }}>
        <h3 style={{ 
          margin: 0, 
          fontSize: "1.125rem", 
          fontWeight: "600", 
          color: "#334155", 
          display: "flex", 
          alignItems: "center", 
          gap: "0.5rem" 
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
          </svg>
          Live Preview
        </h3>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button 
            style={{ 
              backgroundColor: "#f1f5f9", 
              border: "none", 
              borderRadius: "0.375rem", 
              padding: "0.5rem", 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }} 
            title="Download Template"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
          <button 
            style={{ 
              backgroundColor: "#f1f5f9", 
              border: "none", 
              borderRadius: "0.375rem", 
              padding: "0.5rem", 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center"
            }} 
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <div style={{ 
        flex: 1, 
        overflow: "auto", 
        padding: "0", 
        backgroundColor: "#ffffff" 
      }}>
        <div style={{ 
          maxWidth: "100%", 
          margin: "0 auto", 
          boxSizing: "border-box", 
          overflow: "hidden", 
          borderRadius: "0 0 0.5rem 0.5rem" 
        }}>
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

PreviewPane.propTypes = {
  templateId: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PreviewPane;
