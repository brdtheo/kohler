import clsx from 'clsx';

import { TextFieldType } from './types';

type Props = {
  id: string;
  name: string;
  label?: string;
  isRequired?: boolean;
  isError?: boolean;
  errorText?: string;
  type?: `${TextFieldType}`;
  onChange: () => void;
};

const TextField: React.FC<Props> = ({
  id,
  name,
  label,
  isError,
  errorText,
  isRequired,
  type = TextFieldType.TEXT,
}) => (
  <>
    <label
      htmlFor={id}
      className={clsx(
        'w-full text-xs gg-bold mb-1',
        { hidden: !label },
        isError ? 'text-begonia' : 'text-crestline',
      )}
    >
      <span className="uppercase">{label}</span>

      {isRequired && !isError && <span className="pl-1 text-begonia">*</span>}

      {isError && errorText && (
        <span className="gg-medium text-xs italic tracking-[0.02em]">
          <span className="px-1">-</span>
          {errorText}
        </span>
      )}
    </label>

    <input
      spellCheck={false}
      id={id}
      name={name}
      type={type}
      className="p-2.5 w-full bg-shark rounded h-10 text-iron outline-none outline-transparent outline-offset-0 outline-4 focus-visible:outline-link"
      required
    />
  </>
);

export default TextField;
