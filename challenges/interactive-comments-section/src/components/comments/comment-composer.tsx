import { MentionsInput, Mention } from "react-mentions";
import { useUser } from "../../store/user";
import { allUsers } from "../../assets/users";

const CommentComposer = ({ value, setValue }) => {
  const { lookup = {} } = useUser();

  return (
    <MentionsInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Add a comment..."
      forceSuggestionsAboveCursor
      style={{
        input: {
          padding: "16px",
        },
      }}
      className="w-full min-h-[100px] border border-light-gray focus:border-dark-blue rounded-lg px-[30px]"
    >
      <Mention
        trigger="@"
        markup="@__id__"
        data={Object.keys(lookup).map((username) => ({
          id: username,
          display: username,
        }))}
        displayTransform={(id) => `@${id}`}
        appendSpaceOnAdd
        mentionClassName="mentions__mention"
        renderSuggestion={(entry, _, __, ___, focused) => (
          <div
            className={`p-2 cursor-pointer ${focused ? "bg-blue-100" : ""}`}
            key={entry.id}
          >
            <div className="flex gap-2 items-center">
              <img
                src={allUsers?.[entry.id]?.images?.png}
                alt={entry.id}
                className="w-[24px] h-[24px]"
              />
              <span>@{entry.display}</span>
            </div>
          </div>
        )}
      />
    </MentionsInput>
  );
};

export default CommentComposer;
