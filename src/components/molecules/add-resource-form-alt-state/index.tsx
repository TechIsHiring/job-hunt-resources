type AddResourceFormAltStateProps =
  | {
      submitting: boolean;
      complete?: undefined;
    }
  | {
      submitting?: undefined;
      complete: boolean;
    };

export const AddResourceFormAltState = ({
  submitting,
  complete,
}: AddResourceFormAltStateProps) => {
  return (
    <>
      {submitting && (
        <div className="flex items-center justify-center h-screen sm:min-h-96">
          Submitting...
        </div>
      )}
      {complete && (
        <div className="flex items-center justify-center h-screen sm:min-h-96">
          Submission Copmlete!
        </div>
      )}
    </>
  );
};
