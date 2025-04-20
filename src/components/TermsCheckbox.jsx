import React from "react";

const TermsCheckBox = ({ label, error, checked, setChecked, required }) => {
  return (
    <fieldset className="space-y-1">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setChecked(!checked)}
      >
        <input
          type="checkbox"
          name="selector"
          checked={checked}
          className="hidden peer"
          required={required}
        />

        {checked ? (
          <img
            src="/src/assets/images/icon-checkbox-check.svg"
            alt="checked icon"
          />
        ) : (
          <div className="h-[18px] w-[18px] border border-grey-dark" />
        )}
        <label className="flex items-center gap-2 cursor-pointer">
          <span className="text-grey-dark">{label}</span>
          {required && (
            <>
              <span aria-hidden="true" className="text-green-medium">
                *
              </span>
              <span className="sr-only">required</span>
            </>
          )}
        </label>
      </div>
      {error && <label className="text-red">{error}</label>}
    </fieldset>
  );
};

export default TermsCheckBox;
