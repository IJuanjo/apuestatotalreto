interface AmountProps {
    amount: number;
    text: string;
    color: string;
}

const Amount = ({ amount, text, color }: AmountProps) => {
  return (
    <div className="border-input bg-white p-4 flex-1 rounded-2xs">
      <div className="font-bold mb-1 text-3xl">{amount}</div>
      <div className="text-grey">{text}</div>
    </div>
  )
}

export default Amount
