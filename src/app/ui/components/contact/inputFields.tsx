import React from 'react';
import styles from './button.module.css';
import Warning from '../warning';
interface Props {
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type: string;
  name: string;
  warning: boolean;
  isOnFocus: boolean;
  warningMessage: string;
}
export default function InputFields({
  action,
  label,
  type,
  name,
  warning,
  isOnFocus,
  warningMessage,
}: Props) {
  return (
    <>
      <div>
        <label>
          {label}
          <input
            type={type}
            name={name}
            onChange={action}
          />
        </label>
      </div>
      <Warning
        show={warning && isOnFocus}
        message={warningMessage}
      />
    </>
  );
}
