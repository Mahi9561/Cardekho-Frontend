import React from "react";
import { KEY_SPECS, TABS } from "../../constants/specsData";
import "./CarKeySpecs.scss";

function CarKeySpecs() {
  const [activeTab, setActiveTab] = React.useState("specs");
  return (
    <div className="specs">
      <h4 className="specs__title">Tata Sierra specs & features</h4>
      <div className="specs__tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`specs__tab ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="specs__content">
        {activeTab === "specs" && (
          <div className="specs__grid">
            {KEY_SPECS.map((item) => (
              <div key={item.label} className="spec-item">
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
              </div>
            ))}
            <button className="specs__view-all">
              View All Specs and Features →
            </button>
          </div>
        )}
        {activeTab === "features" && <p>Top features coming soon</p>}
        {activeTab === "standout" && <p>Stand out features coming soon</p>}
      </div>
    </div>
  );
}

export default CarKeySpecs;
