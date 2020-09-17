export default function LoadingSpinner() {
  return (
    <div className="flex justify-center mt-32 lg:mt-64">
      <img
        src="/images/virus.svg"
        alt="Virus Illustration Spinning"
        className="w-32 h-32 animate-spin"
      />
    </div>
  );
}
