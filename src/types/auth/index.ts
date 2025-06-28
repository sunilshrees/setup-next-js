import {
  FieldError,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";

// Define types for form data
export interface FormData {
  registrationToken: string;
  mobileRegistrationToken?: string;
  emailRegistrationToken?: string;
  name: string;
  mobileNo: string;
  countryCode: string;
  email: string;
  userAddress: {
    country: string;
    state: string;
    city: string;
    street: string;
    postalCode: string;
  };
  password: string;
  startupInformation: {
    startupName: string;
    businessType: string;
  };
}
export interface PhonePropsI {
  register: UseFormRegister<{ mobileNo: string; countryCode: string }>;
  errors: {
    mobileNo?: FieldError;
    countryCode?: FieldError;
  };
  onNext: () => void;
  setValue: UseFormSetValue<{ mobileNo: string; countryCode: string }>;
  defaultValues: { mobileNo: string; countryCode: string };
  trigger: UseFormTrigger<{ mobileNo: string; countryCode: string }>;
  isPending: boolean;
}
export interface MobileEmailLoginInterface {
  errors: FieldErrors<{ email: string; password: string }>;
  handleSubmit: UseFormHandleSubmit<{ email: string; password: string }>;
  onSubmit: (data: { email: string; password: string }) => Promise<void>;
  isPending: boolean;
  register: UseFormRegister<{ email: string; password: string }>;
  setValue: UseFormSetValue<{ email: string; password: string }>;
  trigger: UseFormTrigger<{ email: string; password: string }>;
}
// Define props for step components
export interface StepProps {
  data: FormData;
  onNext: () => void;
  onBack: () => void;
  onDataChange: (newData: Partial<FormData>) => void;
}
export interface MobileRegisterFormInterface {
  register: UseFormRegister<{ mobileNo: string; countryCode: string }>;
  errors: {
    mobileNo?: FieldError; // Allow undefined
    countryCode?: FieldError;
  };
  onNext: () => void;
  setValue: UseFormSetValue<{ mobileNo: string; countryCode: string }>;
  defaultValues: { mobileNo: string; countryCode: string };
  trigger: UseFormTrigger<{ mobileNo: string; countryCode: string }>;
  isPending: boolean;
}
export interface OTPLoginI {
  onBack: () => void;
  onSubmit: (data: { otp: string }) => Promise<void>;
  isExpired: boolean;
  expiresIn: number;
  handleResendOtp: () => Promise<void>;
  defaultValues: { otp: string };
  setValue: UseFormSetValue<{ otp: string }>;
  errors: FieldErrors<{ otp: string }>;
  trigger: UseFormTrigger<{ otp: string }>;
  isPending: boolean;
  setIsExpired: (isExpired: boolean) => void;
  handleSubmit: UseFormHandleSubmit<{ otp: string }>;
}

export interface MobileEmailRegisterInterface {
  onSubmit: (data: { password: string }) => Promise<void>;
  errors: FieldErrors<{
    password: string;
    confirmPassword?: string;
  }>;
  isPending: boolean;
  handleSubmit: UseFormHandleSubmit<{ password: string }>;
  setValue: UseFormSetValue<{
    password: string;
    confirmPassword?: string;
  }>;
  register: UseFormRegister<{
    password: string;
    confirmPassword?: string;
  }>;
  trigger: UseFormTrigger<{
    password: string;
    confirmPassword?: string;
  }>;
}
