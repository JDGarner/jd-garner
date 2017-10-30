import React from "react";

function WorkItem(props) {
  return (
    <div className="col-4 work-item">
      {props.workItem.link ? (
        <img
          onClick={() => followLink(props.workItem.link)}
          src={props.workItem.imageURL}
        />
      ) : (
        props.workItem.name
      )}
    </div>
  );
}

const followLink = link => {
  window.location.href = link;
};

export default function Work(props) {
  return (
    <section className="work row">
      {props.work.map((workItem, i) => (
        <WorkItem workItem={workItem} key={i} />
      ))}
    </section>
  );
}
