"use client";

import { usePreBookFlow } from "./hooks/use-pre-book-flow";
import { InitialStep } from "./steps/initial-step";
import { AddressStep } from "./steps/address-step";
import { ContactStep } from "./steps/contact-step";

export function PreBookFlow() {
  const {
    step,
    formData,
    error,
    handleInitialSubmit,
    handleAddressSubmit,
    handleContactSubmit,
    handleBack,
    handleComplete,
  } = usePreBookFlow();

  return (
    <>
      {step === "initial" && <InitialStep formData={formData} onSubmit={handleInitialSubmit} />}
      {step === "address" && <AddressStep onSubmit={handleAddressSubmit} onBack={handleBack} />}
      {step === "contact" && (
        <ContactStep
          formData={formData}
          onChange={handleContactSubmit}
          onBack={handleBack}
          onComplete={handleComplete}
        />
      )}
    </>
  );
}
