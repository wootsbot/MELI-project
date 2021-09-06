function BreadcrumbItem({ component: Component = 'span', ...props }) {
  return <Component {...props} />;
}

export default BreadcrumbItem;
