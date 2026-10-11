export function PaymentIcons() {
  return (
    <div
      className="payment-icons-row"
      aria-label="Formas de pagamento aceitas: Wiapy, Pix (Powered by Banco Central), Visa, Mastercard"
    >
      {/* Wiapy Logo Oficial */}
      <div className="payment-icon-item" title="Checkout Seguro Wiapy">
        <img
          src="/assets/wiapy-logo.png"
          alt="Wiapy Pagamentos"
          className="h-5 w-auto object-contain"
        />
      </div>

      {/* PIX Oficial com 'Powered by Banco Central' (Exact Match) */}
      <div
        className="payment-icon-item"
        title="PIX - Powered by Banco Central"
      >
        <img
          src="/assets/pix-powered.svg"
          alt="Pix - Powered by Banco Central"
          className="h-6 w-auto object-contain"
        />
      </div>

      {/* VISA Logo */}
      <div className="payment-icon-item" title="Cartão de Crédito Visa">
        <svg
          viewBox="0 0 46 16"
          className="h-4 w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="0"
            y="13"
            fill="#939598"
            fontSize="14"
            fontWeight="900"
            fontStyle="italic"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.06em"
          >
            VISA
          </text>
        </svg>
      </div>

      {/* MASTERCARD Logo */}
      <div className="payment-icon-item" title="Cartão de Crédito Mastercard">
        <svg
          viewBox="0 0 36 22"
          className="h-5 w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="11" r="9" fill="#939598" fillOpacity="0.8" />
          <circle cx="24" cy="11" r="9" fill="#939598" fillOpacity="0.55" />
        </svg>
      </div>
    </div>
  );
}
