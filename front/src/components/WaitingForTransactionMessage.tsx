import React from 'react'

type WaitingForTransactionMessageProps = {
    txHash: string;
  };

const WaitingForTransactionMessage = ({txHash}: WaitingForTransactionMessageProps) => {
  return (
    <div>
      Waiting for transaction <strong>{txHash}</strong>
    </div>
  )
}

export default WaitingForTransactionMessage