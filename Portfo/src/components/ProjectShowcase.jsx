import React, { useEffect, useState } from "react";
import "./ProjectShowcase.css";

const ProjectShowcase = ({ items = [], compact = false }) => {
  const [previewItem, setPreviewItem] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setPreviewItem(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <div className={`project-grid ${compact ? "compact" : ""}`}>
        {items.map((item, index) => (
          <article
            className="project-card"
            key={`${item.title}-${index}`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <button
              type="button"
              className="project-image-link"
              onClick={() => setPreviewItem(item)}
              aria-label={`Preview ${item.title}`}
            >
              <img src={item.image} alt={item.alt || item.title} loading="lazy" />
            </button>
            <div className="project-content">
              <p className="project-type">{item.type}</p>
              {item.liveUrl ? (
                <h3>
                  <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h3>
              ) : (
                <h3>{item.title}</h3>
              )}
              {item.description && <p className="project-description">{item.description}</p>}
              {item.tags?.length ? (
                <div className="project-tags">
                  {item.tags.map((tag) => (
                    <span key={`${item.title}-${tag}`}>{tag}</span>
                  ))}
                </div>
              ) : null}
              {(item.liveUrl || item.repoUrl) && (
                <div className="project-links">
                  {item.liveUrl && (
                    <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                      {item.liveLabel || "Live Demo"}
                    </a>
                  )}
                  {item.repoUrl && (
                    <a href={item.repoUrl} target="_blank" rel="noopener noreferrer">
                      {item.repoLabel || "Source Code"}
                    </a>
                  )}
                </div>
              )}
              <button
                type="button"
                className="view-image-btn"
                onClick={() => setPreviewItem(item)}
              >
                View Image
              </button>
            </div>
          </article>
        ))}
      </div>

      {previewItem && (
        <div
          className="image-preview-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={previewItem.title}
          onClick={() => setPreviewItem(null)}
        >
          <div className="image-preview-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="image-preview-close"
              aria-label="Close image preview"
              onClick={() => setPreviewItem(null)}
            >
              x
            </button>
            <img
              src={previewItem.image}
              alt={previewItem.alt || previewItem.title}
              className="image-preview-full"
            />
            <p className="image-preview-title">{previewItem.title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectShowcase;
