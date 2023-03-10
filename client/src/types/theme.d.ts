type ThemeContextProps = InitData & {
  mode: "test" | "edit" | "live";
  children?: React.ReactNode;
  componentPackage: (props: ComponentIds) => any;
  updateComponentStyle: (props: Omit<UpdateStyleProps, "allStyles">) => any;
  openComponents: { [key: string]: ComponentPackage };
  setOpenComponents: (value: any) => any;
  setData: any;
};

type StyleOptions = {
  [key: string]: any; //Type these variants
};
interface ComponentManifest {
  [key: string]: GetComponentPackage; //Type these variants
}

type GetComponentPackage = AtLeast<ComponentPackage, "componentId">;

type ComponentIds = {
  defaultStyleId: string;
  componentId: string;
};
type BuildComponentIds = {
  componentIds: ComponentIds;
  props: ComponentProps;
  getComponentPackage: any;
};
