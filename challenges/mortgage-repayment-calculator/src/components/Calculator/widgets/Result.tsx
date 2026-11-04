import { currency, initialResults } from "../utils";
import emptyImageSrc from "../../../images/illustration-empty.svg";
interface IResultProps {
  result: typeof initialResults;
}

const Result: React.FC<IResultProps> = ({ result }) => {
  const isEmpty = result.monthly === "";
  const EmptyState = () => (
    <div className="h-full text-center flex flex-col gap-3 items-center justify-center p-8">
      <img src={emptyImageSrc} alt="Empty Image " />
      <h3 className="text-lg font-bold">Results shown here</h3>
      <p className="text-sm text-slate-500">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be
      </p>
    </div>
  );

  return (
    <div className="bg-slate-900 text-white md:rounded-es-[64px] h-full">
      {isEmpty ? (
        <EmptyState />
      ) : (
        <div className="p-6">
          <h3 className="text-lg font-bold mb-3">Your results</h3>
          <p className="text-sm text-slate-500">
            Your results are shown below based on the information you provided,
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
          <div className="bg-lime-500 rounded-lg pt-1 mt-8">
            <div className="bg-slate-800 rounded-lg p-4 space-y-2">
              <p className="text-sm text-slate-500">Your monthly repayment</p>
              <p className="text-4xl font-bold text-lime-500">{`${currency} ${result.monthly}`}</p>
              <div className="h-[1px] w-full bg-slate-500 my-6"></div>
              <p className="text-sm text-slate-500">
                Total repayment over the term
              </p>
              <p className="text-2xl text-white">{`${currency} ${result.total}`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
