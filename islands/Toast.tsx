import { toast, ToastContainer, ToastContainerProps } from "toastify";

export default function Toast({ ...props }: ToastContainerProps) {
  // deno-lint-ignore no-explicit-any
  const ToastComponent = ToastContainer as any;

  return <ToastComponent {...props} />;
}
