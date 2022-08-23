import sanitize from "sanitize-html";

const Sanitized = ({ html = "" }) => {
  const sanitized = sanitize(html);
  return <span dangerouslySetInnerHTML={{ __html: sanitized }} />;
};

export default Sanitized;
