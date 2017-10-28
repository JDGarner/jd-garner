import React from "react";

function WorkItem(props) {
  if (props.workItem.link) {
    return (
      <div className="work-item">
        <img
          onClick={() => followLink(props.workItem.link)}
          src={props.workItem.imageURL}
        />
      </div>
    );
  } else {
    return (
      <div className="work-item">
        {props.workItem.name}
      </div>
    );
  }
}

const followLink = link => {
  window.location.href = link;
};

export default function Work(props) {
  return (
    <section className="work">
      {props.work.map((workItem, i) => (
        <WorkItem workItem={workItem} key={i} />
      ))}
    </section>
  );
}
