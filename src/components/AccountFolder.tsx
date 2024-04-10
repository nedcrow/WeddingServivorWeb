const AccountFolder: React.FC<{id:string, name:string, value:React.JSX.Element}> = ({id, name, value}) => {
    return (
      <div className="accordion border-0" id={`accordion-${id}`}>
        <div className="accordion-item border-0">
          <h2 className="accordion-header border-0" id={`heading-${id}`}>
            <button
              className="accordion-button text-black collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${id}`}
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              {name}
            </button>
          </h2>
          <div
            id={`collapse-${id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading-${id}`}
            data-bs-parent={`#accordion-${id}`}
          >
            <div className="accordion-body">{value}</div>
          </div>
        </div>
      </div>
    );
  }

export default AccountFolder;