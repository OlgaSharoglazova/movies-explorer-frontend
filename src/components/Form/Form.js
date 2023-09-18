function Form({
    name,
    children,
    buttonTitle,
    onSubmit,
  }) {
    return (
          <form
            className={`form form-${name}`}
            name={`${name}`}
            onSubmit={onSubmit}
          >
            {children}
            <button
              className={`button form-${name}__button`}
              type="submit"
            >
              {buttonTitle}
            </button>
          </form>
    );
  }
  
  export default Form;
  