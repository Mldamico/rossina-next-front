import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

/**  A keystone list  */
export type Brand = {
  __typename?: 'Brand';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  marca?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tipoDePrenda: Array<TipoDePrenda>;
  _tipoDePrendaMeta?: Maybe<_QueryMeta>;
  producto: Array<Product>;
  _productoMeta?: Maybe<_QueryMeta>;
};


/**  A keystone list  */
export type BrandTipoDePrendaArgs = {
  where?: Maybe<TipoDePrendaWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTipoDePrendasBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Brand_TipoDePrendaMetaArgs = {
  where?: Maybe<TipoDePrendaWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTipoDePrendasBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type BrandProductoArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Brand_ProductoMetaArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type BrandCreateInput = {
  marca?: Maybe<Scalars['String']>;
  tipoDePrenda?: Maybe<TipoDePrendaRelateToManyInput>;
  producto?: Maybe<ProductRelateToManyInput>;
};

export type BrandRelateToOneInput = {
  create?: Maybe<BrandCreateInput>;
  connect?: Maybe<BrandWhereUniqueInput>;
  disconnect?: Maybe<BrandWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type BrandUpdateInput = {
  marca?: Maybe<Scalars['String']>;
  tipoDePrenda?: Maybe<TipoDePrendaRelateToManyInput>;
  producto?: Maybe<ProductRelateToManyInput>;
};

export type BrandWhereInput = {
  AND?: Maybe<Array<Maybe<BrandWhereInput>>>;
  OR?: Maybe<Array<Maybe<BrandWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  marca?: Maybe<Scalars['String']>;
  marca_not?: Maybe<Scalars['String']>;
  marca_contains?: Maybe<Scalars['String']>;
  marca_not_contains?: Maybe<Scalars['String']>;
  marca_starts_with?: Maybe<Scalars['String']>;
  marca_not_starts_with?: Maybe<Scalars['String']>;
  marca_ends_with?: Maybe<Scalars['String']>;
  marca_not_ends_with?: Maybe<Scalars['String']>;
  marca_i?: Maybe<Scalars['String']>;
  marca_not_i?: Maybe<Scalars['String']>;
  marca_contains_i?: Maybe<Scalars['String']>;
  marca_not_contains_i?: Maybe<Scalars['String']>;
  marca_starts_with_i?: Maybe<Scalars['String']>;
  marca_not_starts_with_i?: Maybe<Scalars['String']>;
  marca_ends_with_i?: Maybe<Scalars['String']>;
  marca_not_ends_with_i?: Maybe<Scalars['String']>;
  marca_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  marca_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  condition must be true for all nodes  */
  tipoDePrenda_every?: Maybe<TipoDePrendaWhereInput>;
  /**  condition must be true for at least 1 node  */
  tipoDePrenda_some?: Maybe<TipoDePrendaWhereInput>;
  /**  condition must be false for all nodes  */
  tipoDePrenda_none?: Maybe<TipoDePrendaWhereInput>;
  /**  condition must be true for all nodes  */
  producto_every?: Maybe<ProductWhereInput>;
  /**  condition must be true for at least 1 node  */
  producto_some?: Maybe<ProductWhereInput>;
  /**  condition must be false for all nodes  */
  producto_none?: Maybe<ProductWhereInput>;
};

export type BrandWhereUniqueInput = {
  id: Scalars['ID'];
};

export type BrandsCreateInput = {
  data?: Maybe<BrandCreateInput>;
};

export type BrandsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BrandUpdateInput>;
};

/**  A keystone list  */
export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  cantidad?: Maybe<Scalars['Int']>;
  colorSeleccionado?: Maybe<Scalars['String']>;
  talleSeleccionado?: Maybe<Scalars['String']>;
  producto?: Maybe<Product>;
  usuario?: Maybe<User>;
};

export type CartItemCreateInput = {
  cantidad?: Maybe<Scalars['Int']>;
  colorSeleccionado?: Maybe<Scalars['String']>;
  talleSeleccionado?: Maybe<Scalars['String']>;
  producto?: Maybe<ProductRelateToOneInput>;
  usuario?: Maybe<UserRelateToOneInput>;
};

export type CartItemRelateToManyInput = {
  create?: Maybe<Array<Maybe<CartItemCreateInput>>>;
  connect?: Maybe<Array<Maybe<CartItemWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<CartItemWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type CartItemUpdateInput = {
  cantidad?: Maybe<Scalars['Int']>;
  colorSeleccionado?: Maybe<Scalars['String']>;
  talleSeleccionado?: Maybe<Scalars['String']>;
  producto?: Maybe<ProductRelateToOneInput>;
  usuario?: Maybe<UserRelateToOneInput>;
};

export type CartItemWhereInput = {
  AND?: Maybe<Array<Maybe<CartItemWhereInput>>>;
  OR?: Maybe<Array<Maybe<CartItemWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cantidad?: Maybe<Scalars['Int']>;
  cantidad_not?: Maybe<Scalars['Int']>;
  cantidad_lt?: Maybe<Scalars['Int']>;
  cantidad_lte?: Maybe<Scalars['Int']>;
  cantidad_gt?: Maybe<Scalars['Int']>;
  cantidad_gte?: Maybe<Scalars['Int']>;
  cantidad_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  cantidad_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  colorSeleccionado?: Maybe<Scalars['String']>;
  colorSeleccionado_not?: Maybe<Scalars['String']>;
  colorSeleccionado_contains?: Maybe<Scalars['String']>;
  colorSeleccionado_not_contains?: Maybe<Scalars['String']>;
  colorSeleccionado_starts_with?: Maybe<Scalars['String']>;
  colorSeleccionado_not_starts_with?: Maybe<Scalars['String']>;
  colorSeleccionado_ends_with?: Maybe<Scalars['String']>;
  colorSeleccionado_not_ends_with?: Maybe<Scalars['String']>;
  colorSeleccionado_i?: Maybe<Scalars['String']>;
  colorSeleccionado_not_i?: Maybe<Scalars['String']>;
  colorSeleccionado_contains_i?: Maybe<Scalars['String']>;
  colorSeleccionado_not_contains_i?: Maybe<Scalars['String']>;
  colorSeleccionado_starts_with_i?: Maybe<Scalars['String']>;
  colorSeleccionado_not_starts_with_i?: Maybe<Scalars['String']>;
  colorSeleccionado_ends_with_i?: Maybe<Scalars['String']>;
  colorSeleccionado_not_ends_with_i?: Maybe<Scalars['String']>;
  colorSeleccionado_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  colorSeleccionado_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  talleSeleccionado?: Maybe<Scalars['String']>;
  talleSeleccionado_not?: Maybe<Scalars['String']>;
  talleSeleccionado_contains?: Maybe<Scalars['String']>;
  talleSeleccionado_not_contains?: Maybe<Scalars['String']>;
  talleSeleccionado_starts_with?: Maybe<Scalars['String']>;
  talleSeleccionado_not_starts_with?: Maybe<Scalars['String']>;
  talleSeleccionado_ends_with?: Maybe<Scalars['String']>;
  talleSeleccionado_not_ends_with?: Maybe<Scalars['String']>;
  talleSeleccionado_i?: Maybe<Scalars['String']>;
  talleSeleccionado_not_i?: Maybe<Scalars['String']>;
  talleSeleccionado_contains_i?: Maybe<Scalars['String']>;
  talleSeleccionado_not_contains_i?: Maybe<Scalars['String']>;
  talleSeleccionado_starts_with_i?: Maybe<Scalars['String']>;
  talleSeleccionado_not_starts_with_i?: Maybe<Scalars['String']>;
  talleSeleccionado_ends_with_i?: Maybe<Scalars['String']>;
  talleSeleccionado_not_ends_with_i?: Maybe<Scalars['String']>;
  talleSeleccionado_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  talleSeleccionado_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  producto?: Maybe<ProductWhereInput>;
  producto_is_null?: Maybe<Scalars['Boolean']>;
  usuario?: Maybe<UserWhereInput>;
  usuario_is_null?: Maybe<Scalars['Boolean']>;
};

export type CartItemWhereUniqueInput = {
  id: Scalars['ID'];
};

export type CartItemsCreateInput = {
  data?: Maybe<CartItemCreateInput>;
};

export type CartItemsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<CartItemUpdateInput>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
  prettyName?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  crop?: Maybe<Scalars['String']>;
  aspect_ratio?: Maybe<Scalars['String']>;
  gravity?: Maybe<Scalars['String']>;
  zoom?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  fetch_format?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['String']>;
  angle?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['String']>;
  border?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  overlay?: Maybe<Scalars['String']>;
  underlay?: Maybe<Scalars['String']>;
  default_image?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  color_space?: Maybe<Scalars['String']>;
  dpr?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  density?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
  transformation?: Maybe<Scalars['String']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: Maybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  nombre?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSignout: Scalars['Boolean'];
  enableSessionItem: Scalars['Boolean'];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  path: Scalars['String'];
  label: Scalars['String'];
  isOrderable: Scalars['Boolean'];
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsIndex: Scalars['Int'];
  customViewsIndex?: Maybe<Scalars['Int']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  key: Scalars['String'];
  itemQueryName: Scalars['String'];
  listQueryName: Scalars['String'];
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  path: Scalars['String'];
  label: Scalars['String'];
  singular: Scalars['String'];
  plural: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  initialColumns: Array<Scalars['String']>;
  pageSize: Scalars['Int'];
  labelField: Scalars['String'];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  field: Scalars['String'];
  direction: KeystoneAdminUiSortDirection;
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create a single Product item.  */
  createProduct?: Maybe<Product>;
  /**  Create multiple Product items.  */
  createProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Update a single Product item by ID.  */
  updateProduct?: Maybe<Product>;
  /**  Update multiple Product items by ID.  */
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Delete a single Product item by ID.  */
  deleteProduct?: Maybe<Product>;
  /**  Delete multiple Product items by ID.  */
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Create a single ProductImage item.  */
  createProductImage?: Maybe<ProductImage>;
  /**  Create multiple ProductImage items.  */
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Update a single ProductImage item by ID.  */
  updateProductImage?: Maybe<ProductImage>;
  /**  Update multiple ProductImage items by ID.  */
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Delete a single ProductImage item by ID.  */
  deleteProductImage?: Maybe<ProductImage>;
  /**  Delete multiple ProductImage items by ID.  */
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Create a single Stock item.  */
  createStock?: Maybe<Stock>;
  /**  Create multiple Stock items.  */
  createStocks?: Maybe<Array<Maybe<Stock>>>;
  /**  Update a single Stock item by ID.  */
  updateStock?: Maybe<Stock>;
  /**  Update multiple Stock items by ID.  */
  updateStocks?: Maybe<Array<Maybe<Stock>>>;
  /**  Delete a single Stock item by ID.  */
  deleteStock?: Maybe<Stock>;
  /**  Delete multiple Stock items by ID.  */
  deleteStocks?: Maybe<Array<Maybe<Stock>>>;
  /**  Create a single Role item.  */
  createRole?: Maybe<Role>;
  /**  Create multiple Role items.  */
  createRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Update a single Role item by ID.  */
  updateRole?: Maybe<Role>;
  /**  Update multiple Role items by ID.  */
  updateRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Delete a single Role item by ID.  */
  deleteRole?: Maybe<Role>;
  /**  Delete multiple Role items by ID.  */
  deleteRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Create a single OrderItem item.  */
  createOrderItem?: Maybe<OrderItem>;
  /**  Create multiple OrderItem items.  */
  createOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Update a single OrderItem item by ID.  */
  updateOrderItem?: Maybe<OrderItem>;
  /**  Update multiple OrderItem items by ID.  */
  updateOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Delete a single OrderItem item by ID.  */
  deleteOrderItem?: Maybe<OrderItem>;
  /**  Delete multiple OrderItem items by ID.  */
  deleteOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Create a single CartItem item.  */
  createCartItem?: Maybe<CartItem>;
  /**  Create multiple CartItem items.  */
  createCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Update a single CartItem item by ID.  */
  updateCartItem?: Maybe<CartItem>;
  /**  Update multiple CartItem items by ID.  */
  updateCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Delete a single CartItem item by ID.  */
  deleteCartItem?: Maybe<CartItem>;
  /**  Delete multiple CartItem items by ID.  */
  deleteCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Create a single Order item.  */
  createOrder?: Maybe<Order>;
  /**  Create multiple Order items.  */
  createOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Update a single Order item by ID.  */
  updateOrder?: Maybe<Order>;
  /**  Update multiple Order items by ID.  */
  updateOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Delete a single Order item by ID.  */
  deleteOrder?: Maybe<Order>;
  /**  Delete multiple Order items by ID.  */
  deleteOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Create a single Brand item.  */
  createBrand?: Maybe<Brand>;
  /**  Create multiple Brand items.  */
  createBrands?: Maybe<Array<Maybe<Brand>>>;
  /**  Update a single Brand item by ID.  */
  updateBrand?: Maybe<Brand>;
  /**  Update multiple Brand items by ID.  */
  updateBrands?: Maybe<Array<Maybe<Brand>>>;
  /**  Delete a single Brand item by ID.  */
  deleteBrand?: Maybe<Brand>;
  /**  Delete multiple Brand items by ID.  */
  deleteBrands?: Maybe<Array<Maybe<Brand>>>;
  /**  Create a single TipoDePrenda item.  */
  createTipoDePrenda?: Maybe<TipoDePrenda>;
  /**  Create multiple TipoDePrenda items.  */
  createTipoDePrendas?: Maybe<Array<Maybe<TipoDePrenda>>>;
  /**  Update a single TipoDePrenda item by ID.  */
  updateTipoDePrenda?: Maybe<TipoDePrenda>;
  /**  Update multiple TipoDePrenda items by ID.  */
  updateTipoDePrendas?: Maybe<Array<Maybe<TipoDePrenda>>>;
  /**  Delete a single TipoDePrenda item by ID.  */
  deleteTipoDePrenda?: Maybe<TipoDePrenda>;
  /**  Delete multiple TipoDePrenda items by ID.  */
  deleteTipoDePrendas?: Maybe<Array<Maybe<TipoDePrenda>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  sendUserPasswordResetLink?: Maybe<SendUserPasswordResetLinkResult>;
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  addToCart?: Maybe<CartItem>;
  endSession: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateProductArgs = {
  data?: Maybe<ProductCreateInput>;
};


export type MutationCreateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsCreateInput>>>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  data?: Maybe<ProductUpdateInput>;
};


export type MutationUpdateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsUpdateInput>>>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateProductImageArgs = {
  data?: Maybe<ProductImageCreateInput>;
};


export type MutationCreateProductImagesArgs = {
  data?: Maybe<Array<Maybe<ProductImagesCreateInput>>>;
};


export type MutationUpdateProductImageArgs = {
  id: Scalars['ID'];
  data?: Maybe<ProductImageUpdateInput>;
};


export type MutationUpdateProductImagesArgs = {
  data?: Maybe<Array<Maybe<ProductImagesUpdateInput>>>;
};


export type MutationDeleteProductImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductImagesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateStockArgs = {
  data?: Maybe<StockCreateInput>;
};


export type MutationCreateStocksArgs = {
  data?: Maybe<Array<Maybe<StocksCreateInput>>>;
};


export type MutationUpdateStockArgs = {
  id: Scalars['ID'];
  data?: Maybe<StockUpdateInput>;
};


export type MutationUpdateStocksArgs = {
  data?: Maybe<Array<Maybe<StocksUpdateInput>>>;
};


export type MutationDeleteStockArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStocksArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateRoleArgs = {
  data?: Maybe<RoleCreateInput>;
};


export type MutationCreateRolesArgs = {
  data?: Maybe<Array<Maybe<RolesCreateInput>>>;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID'];
  data?: Maybe<RoleUpdateInput>;
};


export type MutationUpdateRolesArgs = {
  data?: Maybe<Array<Maybe<RolesUpdateInput>>>;
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRolesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrderItemArgs = {
  data?: Maybe<OrderItemCreateInput>;
};


export type MutationCreateOrderItemsArgs = {
  data?: Maybe<Array<Maybe<OrderItemsCreateInput>>>;
};


export type MutationUpdateOrderItemArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrderItemUpdateInput>;
};


export type MutationUpdateOrderItemsArgs = {
  data?: Maybe<Array<Maybe<OrderItemsUpdateInput>>>;
};


export type MutationDeleteOrderItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrderItemsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateCartItemArgs = {
  data?: Maybe<CartItemCreateInput>;
};


export type MutationCreateCartItemsArgs = {
  data?: Maybe<Array<Maybe<CartItemsCreateInput>>>;
};


export type MutationUpdateCartItemArgs = {
  id: Scalars['ID'];
  data?: Maybe<CartItemUpdateInput>;
};


export type MutationUpdateCartItemsArgs = {
  data?: Maybe<Array<Maybe<CartItemsUpdateInput>>>;
};


export type MutationDeleteCartItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCartItemsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrderArgs = {
  data?: Maybe<OrderCreateInput>;
};


export type MutationCreateOrdersArgs = {
  data?: Maybe<Array<Maybe<OrdersCreateInput>>>;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrderUpdateInput>;
};


export type MutationUpdateOrdersArgs = {
  data?: Maybe<Array<Maybe<OrdersUpdateInput>>>;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrdersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBrandArgs = {
  data?: Maybe<BrandCreateInput>;
};


export type MutationCreateBrandsArgs = {
  data?: Maybe<Array<Maybe<BrandsCreateInput>>>;
};


export type MutationUpdateBrandArgs = {
  id: Scalars['ID'];
  data?: Maybe<BrandUpdateInput>;
};


export type MutationUpdateBrandsArgs = {
  data?: Maybe<Array<Maybe<BrandsUpdateInput>>>;
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBrandsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateTipoDePrendaArgs = {
  data?: Maybe<TipoDePrendaCreateInput>;
};


export type MutationCreateTipoDePrendasArgs = {
  data?: Maybe<Array<Maybe<TipoDePrendasCreateInput>>>;
};


export type MutationUpdateTipoDePrendaArgs = {
  id: Scalars['ID'];
  data?: Maybe<TipoDePrendaUpdateInput>;
};


export type MutationUpdateTipoDePrendasArgs = {
  data?: Maybe<Array<Maybe<TipoDePrendasUpdateInput>>>;
};


export type MutationDeleteTipoDePrendaArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTipoDePrendasArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAddToCartArgs = {
  productId?: Maybe<Scalars['ID']>;
  color?: Maybe<Scalars['String']>;
  talle?: Maybe<Scalars['String']>;
};

/**  A keystone list  */
export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  items: Array<OrderItem>;
  _itemsMeta?: Maybe<_QueryMeta>;
  usuario?: Maybe<User>;
  charge?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type OrderItemsArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Order_ItemsMetaArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type OrderCreateInput = {
  total?: Maybe<Scalars['Int']>;
  items?: Maybe<OrderItemRelateToManyInput>;
  usuario?: Maybe<UserRelateToOneInput>;
  charge?: Maybe<Scalars['Int']>;
};

/**  A keystone list  */
export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  articulo?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  imagen: Array<ProductImage>;
  _imagenMeta?: Maybe<_QueryMeta>;
  status?: Maybe<Scalars['String']>;
  precio?: Maybe<Scalars['Int']>;
  tipoDePrenda?: Maybe<Scalars['String']>;
  talle?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  cantidad?: Maybe<Scalars['Int']>;
  marca?: Maybe<Scalars['String']>;
  orden?: Maybe<Order>;
};


/**  A keystone list  */
export type OrderItemImagenArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type OrderItem_ImagenMetaArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type OrderItemCreateInput = {
  articulo?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  imagen?: Maybe<ProductImageRelateToManyInput>;
  status?: Maybe<Scalars['String']>;
  precio?: Maybe<Scalars['Int']>;
  tipoDePrenda?: Maybe<Scalars['String']>;
  talle?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  cantidad?: Maybe<Scalars['Int']>;
  marca?: Maybe<Scalars['String']>;
  orden?: Maybe<OrderRelateToOneInput>;
};

export type OrderItemRelateToManyInput = {
  create?: Maybe<Array<Maybe<OrderItemCreateInput>>>;
  connect?: Maybe<Array<Maybe<OrderItemWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<OrderItemWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type OrderItemUpdateInput = {
  articulo?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  imagen?: Maybe<ProductImageRelateToManyInput>;
  status?: Maybe<Scalars['String']>;
  precio?: Maybe<Scalars['Int']>;
  tipoDePrenda?: Maybe<Scalars['String']>;
  talle?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  cantidad?: Maybe<Scalars['Int']>;
  marca?: Maybe<Scalars['String']>;
  orden?: Maybe<OrderRelateToOneInput>;
};

export type OrderItemWhereInput = {
  AND?: Maybe<Array<Maybe<OrderItemWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrderItemWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  articulo?: Maybe<Scalars['String']>;
  articulo_not?: Maybe<Scalars['String']>;
  articulo_contains?: Maybe<Scalars['String']>;
  articulo_not_contains?: Maybe<Scalars['String']>;
  articulo_starts_with?: Maybe<Scalars['String']>;
  articulo_not_starts_with?: Maybe<Scalars['String']>;
  articulo_ends_with?: Maybe<Scalars['String']>;
  articulo_not_ends_with?: Maybe<Scalars['String']>;
  articulo_i?: Maybe<Scalars['String']>;
  articulo_not_i?: Maybe<Scalars['String']>;
  articulo_contains_i?: Maybe<Scalars['String']>;
  articulo_not_contains_i?: Maybe<Scalars['String']>;
  articulo_starts_with_i?: Maybe<Scalars['String']>;
  articulo_not_starts_with_i?: Maybe<Scalars['String']>;
  articulo_ends_with_i?: Maybe<Scalars['String']>;
  articulo_not_ends_with_i?: Maybe<Scalars['String']>;
  articulo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  articulo_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombre?: Maybe<Scalars['String']>;
  nombre_not?: Maybe<Scalars['String']>;
  nombre_contains?: Maybe<Scalars['String']>;
  nombre_not_contains?: Maybe<Scalars['String']>;
  nombre_starts_with?: Maybe<Scalars['String']>;
  nombre_not_starts_with?: Maybe<Scalars['String']>;
  nombre_ends_with?: Maybe<Scalars['String']>;
  nombre_not_ends_with?: Maybe<Scalars['String']>;
  nombre_i?: Maybe<Scalars['String']>;
  nombre_not_i?: Maybe<Scalars['String']>;
  nombre_contains_i?: Maybe<Scalars['String']>;
  nombre_not_contains_i?: Maybe<Scalars['String']>;
  nombre_starts_with_i?: Maybe<Scalars['String']>;
  nombre_not_starts_with_i?: Maybe<Scalars['String']>;
  nombre_ends_with_i?: Maybe<Scalars['String']>;
  nombre_not_ends_with_i?: Maybe<Scalars['String']>;
  nombre_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombre_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  descripcion?: Maybe<Scalars['String']>;
  descripcion_not?: Maybe<Scalars['String']>;
  descripcion_contains?: Maybe<Scalars['String']>;
  descripcion_not_contains?: Maybe<Scalars['String']>;
  descripcion_starts_with?: Maybe<Scalars['String']>;
  descripcion_not_starts_with?: Maybe<Scalars['String']>;
  descripcion_ends_with?: Maybe<Scalars['String']>;
  descripcion_not_ends_with?: Maybe<Scalars['String']>;
  descripcion_i?: Maybe<Scalars['String']>;
  descripcion_not_i?: Maybe<Scalars['String']>;
  descripcion_contains_i?: Maybe<Scalars['String']>;
  descripcion_not_contains_i?: Maybe<Scalars['String']>;
  descripcion_starts_with_i?: Maybe<Scalars['String']>;
  descripcion_not_starts_with_i?: Maybe<Scalars['String']>;
  descripcion_ends_with_i?: Maybe<Scalars['String']>;
  descripcion_not_ends_with_i?: Maybe<Scalars['String']>;
  descripcion_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  descripcion_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  condition must be true for all nodes  */
  imagen_every?: Maybe<ProductImageWhereInput>;
  /**  condition must be true for at least 1 node  */
  imagen_some?: Maybe<ProductImageWhereInput>;
  /**  condition must be false for all nodes  */
  imagen_none?: Maybe<ProductImageWhereInput>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  precio?: Maybe<Scalars['Int']>;
  precio_not?: Maybe<Scalars['Int']>;
  precio_lt?: Maybe<Scalars['Int']>;
  precio_lte?: Maybe<Scalars['Int']>;
  precio_gt?: Maybe<Scalars['Int']>;
  precio_gte?: Maybe<Scalars['Int']>;
  precio_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  precio_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tipoDePrenda?: Maybe<Scalars['String']>;
  tipoDePrenda_not?: Maybe<Scalars['String']>;
  tipoDePrenda_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tipoDePrenda_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  talle?: Maybe<Scalars['String']>;
  talle_not?: Maybe<Scalars['String']>;
  talle_contains?: Maybe<Scalars['String']>;
  talle_not_contains?: Maybe<Scalars['String']>;
  talle_starts_with?: Maybe<Scalars['String']>;
  talle_not_starts_with?: Maybe<Scalars['String']>;
  talle_ends_with?: Maybe<Scalars['String']>;
  talle_not_ends_with?: Maybe<Scalars['String']>;
  talle_i?: Maybe<Scalars['String']>;
  talle_not_i?: Maybe<Scalars['String']>;
  talle_contains_i?: Maybe<Scalars['String']>;
  talle_not_contains_i?: Maybe<Scalars['String']>;
  talle_starts_with_i?: Maybe<Scalars['String']>;
  talle_not_starts_with_i?: Maybe<Scalars['String']>;
  talle_ends_with_i?: Maybe<Scalars['String']>;
  talle_not_ends_with_i?: Maybe<Scalars['String']>;
  talle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  talle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  color?: Maybe<Scalars['String']>;
  color_not?: Maybe<Scalars['String']>;
  color_contains?: Maybe<Scalars['String']>;
  color_not_contains?: Maybe<Scalars['String']>;
  color_starts_with?: Maybe<Scalars['String']>;
  color_not_starts_with?: Maybe<Scalars['String']>;
  color_ends_with?: Maybe<Scalars['String']>;
  color_not_ends_with?: Maybe<Scalars['String']>;
  color_i?: Maybe<Scalars['String']>;
  color_not_i?: Maybe<Scalars['String']>;
  color_contains_i?: Maybe<Scalars['String']>;
  color_not_contains_i?: Maybe<Scalars['String']>;
  color_starts_with_i?: Maybe<Scalars['String']>;
  color_not_starts_with_i?: Maybe<Scalars['String']>;
  color_ends_with_i?: Maybe<Scalars['String']>;
  color_not_ends_with_i?: Maybe<Scalars['String']>;
  color_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  color_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cantidad?: Maybe<Scalars['Int']>;
  cantidad_not?: Maybe<Scalars['Int']>;
  cantidad_lt?: Maybe<Scalars['Int']>;
  cantidad_lte?: Maybe<Scalars['Int']>;
  cantidad_gt?: Maybe<Scalars['Int']>;
  cantidad_gte?: Maybe<Scalars['Int']>;
  cantidad_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  cantidad_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  marca?: Maybe<Scalars['String']>;
  marca_not?: Maybe<Scalars['String']>;
  marca_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  marca_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  orden?: Maybe<OrderWhereInput>;
  orden_is_null?: Maybe<Scalars['Boolean']>;
};

export type OrderItemWhereUniqueInput = {
  id: Scalars['ID'];
};

export type OrderItemsCreateInput = {
  data?: Maybe<OrderItemCreateInput>;
};

export type OrderItemsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrderItemUpdateInput>;
};

export type OrderRelateToManyInput = {
  create?: Maybe<Array<Maybe<OrderCreateInput>>>;
  connect?: Maybe<Array<Maybe<OrderWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<OrderWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type OrderRelateToOneInput = {
  create?: Maybe<OrderCreateInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
  disconnect?: Maybe<OrderWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type OrderUpdateInput = {
  total?: Maybe<Scalars['Int']>;
  items?: Maybe<OrderItemRelateToManyInput>;
  usuario?: Maybe<UserRelateToOneInput>;
  charge?: Maybe<Scalars['Int']>;
};

export type OrderWhereInput = {
  AND?: Maybe<Array<Maybe<OrderWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrderWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  total?: Maybe<Scalars['Int']>;
  total_not?: Maybe<Scalars['Int']>;
  total_lt?: Maybe<Scalars['Int']>;
  total_lte?: Maybe<Scalars['Int']>;
  total_gt?: Maybe<Scalars['Int']>;
  total_gte?: Maybe<Scalars['Int']>;
  total_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  total_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /**  condition must be true for all nodes  */
  items_every?: Maybe<OrderItemWhereInput>;
  /**  condition must be true for at least 1 node  */
  items_some?: Maybe<OrderItemWhereInput>;
  /**  condition must be false for all nodes  */
  items_none?: Maybe<OrderItemWhereInput>;
  usuario?: Maybe<UserWhereInput>;
  usuario_is_null?: Maybe<Scalars['Boolean']>;
  charge?: Maybe<Scalars['Int']>;
  charge_not?: Maybe<Scalars['Int']>;
  charge_lt?: Maybe<Scalars['Int']>;
  charge_lte?: Maybe<Scalars['Int']>;
  charge_gt?: Maybe<Scalars['Int']>;
  charge_gte?: Maybe<Scalars['Int']>;
  charge_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  charge_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type OrderWhereUniqueInput = {
  id: Scalars['ID'];
};

export type OrdersCreateInput = {
  data?: Maybe<OrderCreateInput>;
};

export type OrdersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrderUpdateInput>;
};

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  SecretNotSet = 'SECRET_NOT_SET',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH'
}

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  TokenNotSet = 'TOKEN_NOT_SET',
  TokenMismatch = 'TOKEN_MISMATCH',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export enum PasswordResetRequestErrorCode {
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES'
}

/**  A keystone list  */
export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  articulo?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  imagen: Array<ProductImage>;
  _imagenMeta?: Maybe<_QueryMeta>;
  status?: Maybe<Scalars['String']>;
  precio?: Maybe<Scalars['Int']>;
  tipoDePrenda?: Maybe<TipoDePrenda>;
  categoria?: Maybe<Scalars['String']>;
  stock: Array<Stock>;
  _stockMeta?: Maybe<_QueryMeta>;
  marca?: Maybe<Brand>;
};


/**  A keystone list  */
export type ProductImagenArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Product_ImagenMetaArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type ProductStockArgs = {
  where?: Maybe<StockWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortStocksBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Product_StockMetaArgs = {
  where?: Maybe<StockWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortStocksBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ProductCreateInput = {
  articulo?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  imagen?: Maybe<ProductImageRelateToManyInput>;
  status?: Maybe<Scalars['String']>;
  precio?: Maybe<Scalars['Int']>;
  tipoDePrenda?: Maybe<TipoDePrendaRelateToOneInput>;
  categoria?: Maybe<Scalars['String']>;
  stock?: Maybe<StockRelateToManyInput>;
  marca?: Maybe<BrandRelateToOneInput>;
};

/**  A keystone list  */
export type ProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  altText?: Maybe<Scalars['String']>;
};

export type ProductImageCreateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
};

export type ProductImageRelateToManyInput = {
  create?: Maybe<Array<Maybe<ProductImageCreateInput>>>;
  connect?: Maybe<Array<Maybe<ProductImageWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductImageWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ProductImageUpdateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
};

export type ProductImageWhereInput = {
  AND?: Maybe<Array<Maybe<ProductImageWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductImageWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  image?: Maybe<Scalars['String']>;
  image_not?: Maybe<Scalars['String']>;
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText?: Maybe<Scalars['String']>;
  altText_not?: Maybe<Scalars['String']>;
  altText_contains?: Maybe<Scalars['String']>;
  altText_not_contains?: Maybe<Scalars['String']>;
  altText_starts_with?: Maybe<Scalars['String']>;
  altText_not_starts_with?: Maybe<Scalars['String']>;
  altText_ends_with?: Maybe<Scalars['String']>;
  altText_not_ends_with?: Maybe<Scalars['String']>;
  altText_i?: Maybe<Scalars['String']>;
  altText_not_i?: Maybe<Scalars['String']>;
  altText_contains_i?: Maybe<Scalars['String']>;
  altText_not_contains_i?: Maybe<Scalars['String']>;
  altText_starts_with_i?: Maybe<Scalars['String']>;
  altText_not_starts_with_i?: Maybe<Scalars['String']>;
  altText_ends_with_i?: Maybe<Scalars['String']>;
  altText_not_ends_with_i?: Maybe<Scalars['String']>;
  altText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductImageWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ProductImagesCreateInput = {
  data?: Maybe<ProductImageCreateInput>;
};

export type ProductImagesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ProductImageUpdateInput>;
};

export type ProductRelateToManyInput = {
  create?: Maybe<Array<Maybe<ProductCreateInput>>>;
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ProductRelateToOneInput = {
  create?: Maybe<ProductCreateInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<ProductWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ProductUpdateInput = {
  articulo?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  imagen?: Maybe<ProductImageRelateToManyInput>;
  status?: Maybe<Scalars['String']>;
  precio?: Maybe<Scalars['Int']>;
  tipoDePrenda?: Maybe<TipoDePrendaRelateToOneInput>;
  categoria?: Maybe<Scalars['String']>;
  stock?: Maybe<StockRelateToManyInput>;
  marca?: Maybe<BrandRelateToOneInput>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<Maybe<ProductWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  articulo?: Maybe<Scalars['String']>;
  articulo_not?: Maybe<Scalars['String']>;
  articulo_contains?: Maybe<Scalars['String']>;
  articulo_not_contains?: Maybe<Scalars['String']>;
  articulo_starts_with?: Maybe<Scalars['String']>;
  articulo_not_starts_with?: Maybe<Scalars['String']>;
  articulo_ends_with?: Maybe<Scalars['String']>;
  articulo_not_ends_with?: Maybe<Scalars['String']>;
  articulo_i?: Maybe<Scalars['String']>;
  articulo_not_i?: Maybe<Scalars['String']>;
  articulo_contains_i?: Maybe<Scalars['String']>;
  articulo_not_contains_i?: Maybe<Scalars['String']>;
  articulo_starts_with_i?: Maybe<Scalars['String']>;
  articulo_not_starts_with_i?: Maybe<Scalars['String']>;
  articulo_ends_with_i?: Maybe<Scalars['String']>;
  articulo_not_ends_with_i?: Maybe<Scalars['String']>;
  articulo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  articulo_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombre?: Maybe<Scalars['String']>;
  nombre_not?: Maybe<Scalars['String']>;
  nombre_contains?: Maybe<Scalars['String']>;
  nombre_not_contains?: Maybe<Scalars['String']>;
  nombre_starts_with?: Maybe<Scalars['String']>;
  nombre_not_starts_with?: Maybe<Scalars['String']>;
  nombre_ends_with?: Maybe<Scalars['String']>;
  nombre_not_ends_with?: Maybe<Scalars['String']>;
  nombre_i?: Maybe<Scalars['String']>;
  nombre_not_i?: Maybe<Scalars['String']>;
  nombre_contains_i?: Maybe<Scalars['String']>;
  nombre_not_contains_i?: Maybe<Scalars['String']>;
  nombre_starts_with_i?: Maybe<Scalars['String']>;
  nombre_not_starts_with_i?: Maybe<Scalars['String']>;
  nombre_ends_with_i?: Maybe<Scalars['String']>;
  nombre_not_ends_with_i?: Maybe<Scalars['String']>;
  nombre_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombre_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  descripcion?: Maybe<Scalars['String']>;
  descripcion_not?: Maybe<Scalars['String']>;
  descripcion_contains?: Maybe<Scalars['String']>;
  descripcion_not_contains?: Maybe<Scalars['String']>;
  descripcion_starts_with?: Maybe<Scalars['String']>;
  descripcion_not_starts_with?: Maybe<Scalars['String']>;
  descripcion_ends_with?: Maybe<Scalars['String']>;
  descripcion_not_ends_with?: Maybe<Scalars['String']>;
  descripcion_i?: Maybe<Scalars['String']>;
  descripcion_not_i?: Maybe<Scalars['String']>;
  descripcion_contains_i?: Maybe<Scalars['String']>;
  descripcion_not_contains_i?: Maybe<Scalars['String']>;
  descripcion_starts_with_i?: Maybe<Scalars['String']>;
  descripcion_not_starts_with_i?: Maybe<Scalars['String']>;
  descripcion_ends_with_i?: Maybe<Scalars['String']>;
  descripcion_not_ends_with_i?: Maybe<Scalars['String']>;
  descripcion_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  descripcion_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  condition must be true for all nodes  */
  imagen_every?: Maybe<ProductImageWhereInput>;
  /**  condition must be true for at least 1 node  */
  imagen_some?: Maybe<ProductImageWhereInput>;
  /**  condition must be false for all nodes  */
  imagen_none?: Maybe<ProductImageWhereInput>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  precio?: Maybe<Scalars['Int']>;
  precio_not?: Maybe<Scalars['Int']>;
  precio_lt?: Maybe<Scalars['Int']>;
  precio_lte?: Maybe<Scalars['Int']>;
  precio_gt?: Maybe<Scalars['Int']>;
  precio_gte?: Maybe<Scalars['Int']>;
  precio_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  precio_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tipoDePrenda?: Maybe<TipoDePrendaWhereInput>;
  tipoDePrenda_is_null?: Maybe<Scalars['Boolean']>;
  categoria?: Maybe<Scalars['String']>;
  categoria_not?: Maybe<Scalars['String']>;
  categoria_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoria_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  condition must be true for all nodes  */
  stock_every?: Maybe<StockWhereInput>;
  /**  condition must be true for at least 1 node  */
  stock_some?: Maybe<StockWhereInput>;
  /**  condition must be false for all nodes  */
  stock_none?: Maybe<StockWhereInput>;
  marca?: Maybe<BrandWhereInput>;
  marca_is_null?: Maybe<Scalars['Boolean']>;
};

export type ProductWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ProductsCreateInput = {
  data?: Maybe<ProductCreateInput>;
};

export type ProductsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ProductUpdateInput>;
};

export type Query = {
  __typename?: 'Query';
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Search for all Product items which match the where clause.  */
  allProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Search for the Product item with the matching ID.  */
  Product?: Maybe<Product>;
  /**  Perform a meta-query on all Product items which match the where clause.  */
  _allProductsMeta?: Maybe<_QueryMeta>;
  /**  Search for all ProductImage items which match the where clause.  */
  allProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Search for the ProductImage item with the matching ID.  */
  ProductImage?: Maybe<ProductImage>;
  /**  Perform a meta-query on all ProductImage items which match the where clause.  */
  _allProductImagesMeta?: Maybe<_QueryMeta>;
  /**  Search for all Stock items which match the where clause.  */
  allStocks?: Maybe<Array<Maybe<Stock>>>;
  /**  Search for the Stock item with the matching ID.  */
  Stock?: Maybe<Stock>;
  /**  Perform a meta-query on all Stock items which match the where clause.  */
  _allStocksMeta?: Maybe<_QueryMeta>;
  /**  Search for all Role items which match the where clause.  */
  allRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Search for the Role item with the matching ID.  */
  Role?: Maybe<Role>;
  /**  Perform a meta-query on all Role items which match the where clause.  */
  _allRolesMeta?: Maybe<_QueryMeta>;
  /**  Search for all OrderItem items which match the where clause.  */
  allOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Search for the OrderItem item with the matching ID.  */
  OrderItem?: Maybe<OrderItem>;
  /**  Perform a meta-query on all OrderItem items which match the where clause.  */
  _allOrderItemsMeta?: Maybe<_QueryMeta>;
  /**  Search for all CartItem items which match the where clause.  */
  allCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Search for the CartItem item with the matching ID.  */
  CartItem?: Maybe<CartItem>;
  /**  Perform a meta-query on all CartItem items which match the where clause.  */
  _allCartItemsMeta?: Maybe<_QueryMeta>;
  /**  Search for all Order items which match the where clause.  */
  allOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Search for the Order item with the matching ID.  */
  Order?: Maybe<Order>;
  /**  Perform a meta-query on all Order items which match the where clause.  */
  _allOrdersMeta?: Maybe<_QueryMeta>;
  /**  Search for all Brand items which match the where clause.  */
  allBrands?: Maybe<Array<Maybe<Brand>>>;
  /**  Search for the Brand item with the matching ID.  */
  Brand?: Maybe<Brand>;
  /**  Perform a meta-query on all Brand items which match the where clause.  */
  _allBrandsMeta?: Maybe<_QueryMeta>;
  /**  Search for all TipoDePrenda items which match the where clause.  */
  allTipoDePrendas?: Maybe<Array<Maybe<TipoDePrenda>>>;
  /**  Search for the TipoDePrenda item with the matching ID.  */
  TipoDePrenda?: Maybe<TipoDePrenda>;
  /**  Perform a meta-query on all TipoDePrenda items which match the where clause.  */
  _allTipoDePrendasMeta?: Maybe<_QueryMeta>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
  keystone: KeystoneMeta;
};


export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type Query_AllProductsMetaArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllProductImagesArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};


export type Query_AllProductImagesMetaArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllStocksArgs = {
  where?: Maybe<StockWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortStocksBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryStockArgs = {
  where: StockWhereUniqueInput;
};


export type Query_AllStocksMetaArgs = {
  where?: Maybe<StockWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortStocksBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllRolesArgs = {
  where?: Maybe<RoleWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRolesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type Query_AllRolesMetaArgs = {
  where?: Maybe<RoleWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRolesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrderItemsArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type Query_AllOrderItemsMetaArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllCartItemsArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type Query_AllCartItemsMetaArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type Query_AllOrdersMetaArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBrandsArgs = {
  where?: Maybe<BrandWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBrandsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBrandArgs = {
  where: BrandWhereUniqueInput;
};


export type Query_AllBrandsMetaArgs = {
  where?: Maybe<BrandWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBrandsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllTipoDePrendasArgs = {
  where?: Maybe<TipoDePrendaWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTipoDePrendasBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTipoDePrendaArgs = {
  where: TipoDePrendaWhereUniqueInput;
};


export type Query_AllTipoDePrendasMetaArgs = {
  where?: Maybe<TipoDePrendaWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTipoDePrendasBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

/**  A keystone list  */
export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  nombre?: Maybe<Scalars['String']>;
  canManageProducts?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers?: Maybe<Scalars['Boolean']>;
  canManageUsers?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageCart?: Maybe<Scalars['Boolean']>;
  canManageOrders?: Maybe<Scalars['Boolean']>;
  asignado: Array<User>;
  _asignadoMeta?: Maybe<_QueryMeta>;
};


/**  A keystone list  */
export type RoleAsignadoArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Role_AsignadoMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type RoleCreateInput = {
  nombre?: Maybe<Scalars['String']>;
  canManageProducts?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers?: Maybe<Scalars['Boolean']>;
  canManageUsers?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageCart?: Maybe<Scalars['Boolean']>;
  canManageOrders?: Maybe<Scalars['Boolean']>;
  asignado?: Maybe<UserRelateToManyInput>;
};

export type RoleRelateToOneInput = {
  create?: Maybe<RoleCreateInput>;
  connect?: Maybe<RoleWhereUniqueInput>;
  disconnect?: Maybe<RoleWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type RoleUpdateInput = {
  nombre?: Maybe<Scalars['String']>;
  canManageProducts?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers?: Maybe<Scalars['Boolean']>;
  canManageUsers?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageCart?: Maybe<Scalars['Boolean']>;
  canManageOrders?: Maybe<Scalars['Boolean']>;
  asignado?: Maybe<UserRelateToManyInput>;
};

export type RoleWhereInput = {
  AND?: Maybe<Array<Maybe<RoleWhereInput>>>;
  OR?: Maybe<Array<Maybe<RoleWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nombre?: Maybe<Scalars['String']>;
  nombre_not?: Maybe<Scalars['String']>;
  nombre_contains?: Maybe<Scalars['String']>;
  nombre_not_contains?: Maybe<Scalars['String']>;
  nombre_starts_with?: Maybe<Scalars['String']>;
  nombre_not_starts_with?: Maybe<Scalars['String']>;
  nombre_ends_with?: Maybe<Scalars['String']>;
  nombre_not_ends_with?: Maybe<Scalars['String']>;
  nombre_i?: Maybe<Scalars['String']>;
  nombre_not_i?: Maybe<Scalars['String']>;
  nombre_contains_i?: Maybe<Scalars['String']>;
  nombre_not_contains_i?: Maybe<Scalars['String']>;
  nombre_starts_with_i?: Maybe<Scalars['String']>;
  nombre_not_starts_with_i?: Maybe<Scalars['String']>;
  nombre_ends_with_i?: Maybe<Scalars['String']>;
  nombre_not_ends_with_i?: Maybe<Scalars['String']>;
  nombre_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombre_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  canManageProducts?: Maybe<Scalars['Boolean']>;
  canManageProducts_not?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers_not?: Maybe<Scalars['Boolean']>;
  canManageUsers?: Maybe<Scalars['Boolean']>;
  canManageUsers_not?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageRoles_not?: Maybe<Scalars['Boolean']>;
  canManageCart?: Maybe<Scalars['Boolean']>;
  canManageCart_not?: Maybe<Scalars['Boolean']>;
  canManageOrders?: Maybe<Scalars['Boolean']>;
  canManageOrders_not?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  asignado_every?: Maybe<UserWhereInput>;
  /**  condition must be true for at least 1 node  */
  asignado_some?: Maybe<UserWhereInput>;
  /**  condition must be false for all nodes  */
  asignado_none?: Maybe<UserWhereInput>;
};

export type RoleWhereUniqueInput = {
  id: Scalars['ID'];
};

export type RolesCreateInput = {
  data?: Maybe<RoleCreateInput>;
};

export type RolesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<RoleUpdateInput>;
};

export type SendUserPasswordResetLinkResult = {
  __typename?: 'SendUserPasswordResetLinkResult';
  code: PasswordResetRequestErrorCode;
  message: Scalars['String'];
};

export enum SortBrandsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MarcaAsc = 'marca_ASC',
  MarcaDesc = 'marca_DESC',
  TipoDePrendaAsc = 'tipoDePrenda_ASC',
  TipoDePrendaDesc = 'tipoDePrenda_DESC',
  ProductoAsc = 'producto_ASC',
  ProductoDesc = 'producto_DESC'
}

export enum SortCartItemsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CantidadAsc = 'cantidad_ASC',
  CantidadDesc = 'cantidad_DESC',
  ColorSeleccionadoAsc = 'colorSeleccionado_ASC',
  ColorSeleccionadoDesc = 'colorSeleccionado_DESC',
  TalleSeleccionadoAsc = 'talleSeleccionado_ASC',
  TalleSeleccionadoDesc = 'talleSeleccionado_DESC',
  ProductoAsc = 'producto_ASC',
  ProductoDesc = 'producto_DESC',
  UsuarioAsc = 'usuario_ASC',
  UsuarioDesc = 'usuario_DESC'
}

export enum SortOrderItemsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ArticuloAsc = 'articulo_ASC',
  ArticuloDesc = 'articulo_DESC',
  NombreAsc = 'nombre_ASC',
  NombreDesc = 'nombre_DESC',
  DescripcionAsc = 'descripcion_ASC',
  DescripcionDesc = 'descripcion_DESC',
  ImagenAsc = 'imagen_ASC',
  ImagenDesc = 'imagen_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  PrecioAsc = 'precio_ASC',
  PrecioDesc = 'precio_DESC',
  TipoDePrendaAsc = 'tipoDePrenda_ASC',
  TipoDePrendaDesc = 'tipoDePrenda_DESC',
  TalleAsc = 'talle_ASC',
  TalleDesc = 'talle_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  CantidadAsc = 'cantidad_ASC',
  CantidadDesc = 'cantidad_DESC',
  MarcaAsc = 'marca_ASC',
  MarcaDesc = 'marca_DESC',
  OrdenAsc = 'orden_ASC',
  OrdenDesc = 'orden_DESC'
}

export enum SortOrdersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  ItemsAsc = 'items_ASC',
  ItemsDesc = 'items_DESC',
  UsuarioAsc = 'usuario_ASC',
  UsuarioDesc = 'usuario_DESC',
  ChargeAsc = 'charge_ASC',
  ChargeDesc = 'charge_DESC'
}

export enum SortProductImagesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC'
}

export enum SortProductsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ArticuloAsc = 'articulo_ASC',
  ArticuloDesc = 'articulo_DESC',
  NombreAsc = 'nombre_ASC',
  NombreDesc = 'nombre_DESC',
  DescripcionAsc = 'descripcion_ASC',
  DescripcionDesc = 'descripcion_DESC',
  ImagenAsc = 'imagen_ASC',
  ImagenDesc = 'imagen_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  PrecioAsc = 'precio_ASC',
  PrecioDesc = 'precio_DESC',
  TipoDePrendaAsc = 'tipoDePrenda_ASC',
  TipoDePrendaDesc = 'tipoDePrenda_DESC',
  CategoriaAsc = 'categoria_ASC',
  CategoriaDesc = 'categoria_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  MarcaAsc = 'marca_ASC',
  MarcaDesc = 'marca_DESC'
}

export enum SortRolesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NombreAsc = 'nombre_ASC',
  NombreDesc = 'nombre_DESC',
  CanManageProductsAsc = 'canManageProducts_ASC',
  CanManageProductsDesc = 'canManageProducts_DESC',
  CanSeeOtherUsersAsc = 'canSeeOtherUsers_ASC',
  CanSeeOtherUsersDesc = 'canSeeOtherUsers_DESC',
  CanManageUsersAsc = 'canManageUsers_ASC',
  CanManageUsersDesc = 'canManageUsers_DESC',
  CanManageRolesAsc = 'canManageRoles_ASC',
  CanManageRolesDesc = 'canManageRoles_DESC',
  CanManageCartAsc = 'canManageCart_ASC',
  CanManageCartDesc = 'canManageCart_DESC',
  CanManageOrdersAsc = 'canManageOrders_ASC',
  CanManageOrdersDesc = 'canManageOrders_DESC',
  AsignadoAsc = 'asignado_ASC',
  AsignadoDesc = 'asignado_DESC'
}

export enum SortStocksBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProductoAsc = 'producto_ASC',
  ProductoDesc = 'producto_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  NombreTalle1Asc = 'nombreTalle1_ASC',
  NombreTalle1Desc = 'nombreTalle1_DESC',
  CantidadTalle1Asc = 'cantidadTalle1_ASC',
  CantidadTalle1Desc = 'cantidadTalle1_DESC',
  NombreTalle2Asc = 'nombreTalle2_ASC',
  NombreTalle2Desc = 'nombreTalle2_DESC',
  CantidadTalle2Asc = 'cantidadTalle2_ASC',
  CantidadTalle2Desc = 'cantidadTalle2_DESC',
  NombreTalle3Asc = 'nombreTalle3_ASC',
  NombreTalle3Desc = 'nombreTalle3_DESC',
  CantidadTalle3Asc = 'cantidadTalle3_ASC',
  CantidadTalle3Desc = 'cantidadTalle3_DESC',
  NombreTalle4Asc = 'nombreTalle4_ASC',
  NombreTalle4Desc = 'nombreTalle4_DESC',
  CantidadTalle4Asc = 'cantidadTalle4_ASC',
  CantidadTalle4Desc = 'cantidadTalle4_DESC',
  NombreTalle5Asc = 'nombreTalle5_ASC',
  NombreTalle5Desc = 'nombreTalle5_DESC',
  CantidadTalle5Asc = 'cantidadTalle5_ASC',
  CantidadTalle5Desc = 'cantidadTalle5_DESC',
  NombreTalle6Asc = 'nombreTalle6_ASC',
  NombreTalle6Desc = 'nombreTalle6_DESC',
  CantidadTalle6Asc = 'cantidadTalle6_ASC',
  CantidadTalle6Desc = 'cantidadTalle6_DESC',
  NombreTalle7Asc = 'nombreTalle7_ASC',
  NombreTalle7Desc = 'nombreTalle7_DESC',
  CantidadTalle7Asc = 'cantidadTalle7_ASC',
  CantidadTalle7Desc = 'cantidadTalle7_DESC'
}

export enum SortTipoDePrendasBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TipoAsc = 'tipo_ASC',
  TipoDesc = 'tipo_DESC',
  ProductoAsc = 'producto_ASC',
  ProductoDesc = 'producto_DESC'
}

export enum SortUsersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NombreAsc = 'nombre_ASC',
  NombreDesc = 'nombre_DESC',
  ApellidoAsc = 'apellido_ASC',
  ApellidoDesc = 'apellido_DESC',
  TelefonoAsc = 'telefono_ASC',
  TelefonoDesc = 'telefono_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  RolAsc = 'rol_ASC',
  RolDesc = 'rol_DESC',
  CartAsc = 'cart_ASC',
  CartDesc = 'cart_DESC',
  OrdenesAsc = 'ordenes_ASC',
  OrdenesDesc = 'ordenes_DESC',
  PasswordResetIssuedAtAsc = 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc = 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc = 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc = 'passwordResetRedeemedAt_DESC'
}

/**  A keystone list  */
export type Stock = {
  __typename?: 'Stock';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  producto?: Maybe<Product>;
  color?: Maybe<Scalars['String']>;
  nombreTalle1?: Maybe<Scalars['String']>;
  cantidadTalle1?: Maybe<Scalars['Int']>;
  nombreTalle2?: Maybe<Scalars['String']>;
  cantidadTalle2?: Maybe<Scalars['Int']>;
  nombreTalle3?: Maybe<Scalars['String']>;
  cantidadTalle3?: Maybe<Scalars['Int']>;
  nombreTalle4?: Maybe<Scalars['String']>;
  cantidadTalle4?: Maybe<Scalars['Int']>;
  nombreTalle5?: Maybe<Scalars['String']>;
  cantidadTalle5?: Maybe<Scalars['Int']>;
  nombreTalle6?: Maybe<Scalars['String']>;
  cantidadTalle6?: Maybe<Scalars['Int']>;
  nombreTalle7?: Maybe<Scalars['String']>;
  cantidadTalle7?: Maybe<Scalars['Int']>;
};

export type StockCreateInput = {
  producto?: Maybe<ProductRelateToOneInput>;
  color?: Maybe<Scalars['String']>;
  nombreTalle1?: Maybe<Scalars['String']>;
  cantidadTalle1?: Maybe<Scalars['Int']>;
  nombreTalle2?: Maybe<Scalars['String']>;
  cantidadTalle2?: Maybe<Scalars['Int']>;
  nombreTalle3?: Maybe<Scalars['String']>;
  cantidadTalle3?: Maybe<Scalars['Int']>;
  nombreTalle4?: Maybe<Scalars['String']>;
  cantidadTalle4?: Maybe<Scalars['Int']>;
  nombreTalle5?: Maybe<Scalars['String']>;
  cantidadTalle5?: Maybe<Scalars['Int']>;
  nombreTalle6?: Maybe<Scalars['String']>;
  cantidadTalle6?: Maybe<Scalars['Int']>;
  nombreTalle7?: Maybe<Scalars['String']>;
  cantidadTalle7?: Maybe<Scalars['Int']>;
};

export type StockRelateToManyInput = {
  create?: Maybe<Array<Maybe<StockCreateInput>>>;
  connect?: Maybe<Array<Maybe<StockWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<StockWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type StockUpdateInput = {
  producto?: Maybe<ProductRelateToOneInput>;
  color?: Maybe<Scalars['String']>;
  nombreTalle1?: Maybe<Scalars['String']>;
  cantidadTalle1?: Maybe<Scalars['Int']>;
  nombreTalle2?: Maybe<Scalars['String']>;
  cantidadTalle2?: Maybe<Scalars['Int']>;
  nombreTalle3?: Maybe<Scalars['String']>;
  cantidadTalle3?: Maybe<Scalars['Int']>;
  nombreTalle4?: Maybe<Scalars['String']>;
  cantidadTalle4?: Maybe<Scalars['Int']>;
  nombreTalle5?: Maybe<Scalars['String']>;
  cantidadTalle5?: Maybe<Scalars['Int']>;
  nombreTalle6?: Maybe<Scalars['String']>;
  cantidadTalle6?: Maybe<Scalars['Int']>;
  nombreTalle7?: Maybe<Scalars['String']>;
  cantidadTalle7?: Maybe<Scalars['Int']>;
};

export type StockWhereInput = {
  AND?: Maybe<Array<Maybe<StockWhereInput>>>;
  OR?: Maybe<Array<Maybe<StockWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  producto?: Maybe<ProductWhereInput>;
  producto_is_null?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  color_not?: Maybe<Scalars['String']>;
  color_contains?: Maybe<Scalars['String']>;
  color_not_contains?: Maybe<Scalars['String']>;
  color_starts_with?: Maybe<Scalars['String']>;
  color_not_starts_with?: Maybe<Scalars['String']>;
  color_ends_with?: Maybe<Scalars['String']>;
  color_not_ends_with?: Maybe<Scalars['String']>;
  color_i?: Maybe<Scalars['String']>;
  color_not_i?: Maybe<Scalars['String']>;
  color_contains_i?: Maybe<Scalars['String']>;
  color_not_contains_i?: Maybe<Scalars['String']>;
  color_starts_with_i?: Maybe<Scalars['String']>;
  color_not_starts_with_i?: Maybe<Scalars['String']>;
  color_ends_with_i?: Maybe<Scalars['String']>;
  color_not_ends_with_i?: Maybe<Scalars['String']>;
  color_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  color_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombreTalle1?: Maybe<Scalars['String']>;
  nombreTalle1_not?: Maybe<Scalars['String']>;
  nombreTalle1_contains?: Maybe<Scalars['String']>;
  nombreTalle1_not_contains?: Maybe<Scalars['String']>;
  nombreTalle1_starts_with?: Maybe<Scalars['String']>;
  nombreTalle1_not_starts_with?: Maybe<Scalars['String']>;
  nombreTalle1_ends_with?: Maybe<Scalars['String']>;
  nombreTalle1_not_ends_with?: Maybe<Scalars['String']>;
  nombreTalle1_i?: Maybe<Scalars['String']>;
  nombreTalle1_not_i?: Maybe<Scalars['String']>;
  nombreTalle1_contains_i?: Maybe<Scalars['String']>;
  nombreTalle1_not_contains_i?: Maybe<Scalars['String']>;
  nombreTalle1_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle1_not_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle1_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle1_not_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle1_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombreTalle1_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cantidadTalle1?: Maybe<Scalars['Int']>;
  cantidadTalle1_not?: Maybe<Scalars['Int']>;
  cantidadTalle1_lt?: Maybe<Scalars['Int']>;
  cantidadTalle1_lte?: Maybe<Scalars['Int']>;
  cantidadTalle1_gt?: Maybe<Scalars['Int']>;
  cantidadTalle1_gte?: Maybe<Scalars['Int']>;
  cantidadTalle1_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  cantidadTalle1_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nombreTalle2?: Maybe<Scalars['String']>;
  nombreTalle2_not?: Maybe<Scalars['String']>;
  nombreTalle2_contains?: Maybe<Scalars['String']>;
  nombreTalle2_not_contains?: Maybe<Scalars['String']>;
  nombreTalle2_starts_with?: Maybe<Scalars['String']>;
  nombreTalle2_not_starts_with?: Maybe<Scalars['String']>;
  nombreTalle2_ends_with?: Maybe<Scalars['String']>;
  nombreTalle2_not_ends_with?: Maybe<Scalars['String']>;
  nombreTalle2_i?: Maybe<Scalars['String']>;
  nombreTalle2_not_i?: Maybe<Scalars['String']>;
  nombreTalle2_contains_i?: Maybe<Scalars['String']>;
  nombreTalle2_not_contains_i?: Maybe<Scalars['String']>;
  nombreTalle2_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle2_not_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle2_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle2_not_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle2_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombreTalle2_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cantidadTalle2?: Maybe<Scalars['Int']>;
  cantidadTalle2_not?: Maybe<Scalars['Int']>;
  cantidadTalle2_lt?: Maybe<Scalars['Int']>;
  cantidadTalle2_lte?: Maybe<Scalars['Int']>;
  cantidadTalle2_gt?: Maybe<Scalars['Int']>;
  cantidadTalle2_gte?: Maybe<Scalars['Int']>;
  cantidadTalle2_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  cantidadTalle2_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nombreTalle3?: Maybe<Scalars['String']>;
  nombreTalle3_not?: Maybe<Scalars['String']>;
  nombreTalle3_contains?: Maybe<Scalars['String']>;
  nombreTalle3_not_contains?: Maybe<Scalars['String']>;
  nombreTalle3_starts_with?: Maybe<Scalars['String']>;
  nombreTalle3_not_starts_with?: Maybe<Scalars['String']>;
  nombreTalle3_ends_with?: Maybe<Scalars['String']>;
  nombreTalle3_not_ends_with?: Maybe<Scalars['String']>;
  nombreTalle3_i?: Maybe<Scalars['String']>;
  nombreTalle3_not_i?: Maybe<Scalars['String']>;
  nombreTalle3_contains_i?: Maybe<Scalars['String']>;
  nombreTalle3_not_contains_i?: Maybe<Scalars['String']>;
  nombreTalle3_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle3_not_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle3_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle3_not_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle3_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombreTalle3_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cantidadTalle3?: Maybe<Scalars['Int']>;
  cantidadTalle3_not?: Maybe<Scalars['Int']>;
  cantidadTalle3_lt?: Maybe<Scalars['Int']>;
  cantidadTalle3_lte?: Maybe<Scalars['Int']>;
  cantidadTalle3_gt?: Maybe<Scalars['Int']>;
  cantidadTalle3_gte?: Maybe<Scalars['Int']>;
  cantidadTalle3_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  cantidadTalle3_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nombreTalle4?: Maybe<Scalars['String']>;
  nombreTalle4_not?: Maybe<Scalars['String']>;
  nombreTalle4_contains?: Maybe<Scalars['String']>;
  nombreTalle4_not_contains?: Maybe<Scalars['String']>;
  nombreTalle4_starts_with?: Maybe<Scalars['String']>;
  nombreTalle4_not_starts_with?: Maybe<Scalars['String']>;
  nombreTalle4_ends_with?: Maybe<Scalars['String']>;
  nombreTalle4_not_ends_with?: Maybe<Scalars['String']>;
  nombreTalle4_i?: Maybe<Scalars['String']>;
  nombreTalle4_not_i?: Maybe<Scalars['String']>;
  nombreTalle4_contains_i?: Maybe<Scalars['String']>;
  nombreTalle4_not_contains_i?: Maybe<Scalars['String']>;
  nombreTalle4_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle4_not_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle4_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle4_not_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle4_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombreTalle4_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cantidadTalle4?: Maybe<Scalars['Int']>;
  cantidadTalle4_not?: Maybe<Scalars['Int']>;
  cantidadTalle4_lt?: Maybe<Scalars['Int']>;
  cantidadTalle4_lte?: Maybe<Scalars['Int']>;
  cantidadTalle4_gt?: Maybe<Scalars['Int']>;
  cantidadTalle4_gte?: Maybe<Scalars['Int']>;
  cantidadTalle4_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  cantidadTalle4_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nombreTalle5?: Maybe<Scalars['String']>;
  nombreTalle5_not?: Maybe<Scalars['String']>;
  nombreTalle5_contains?: Maybe<Scalars['String']>;
  nombreTalle5_not_contains?: Maybe<Scalars['String']>;
  nombreTalle5_starts_with?: Maybe<Scalars['String']>;
  nombreTalle5_not_starts_with?: Maybe<Scalars['String']>;
  nombreTalle5_ends_with?: Maybe<Scalars['String']>;
  nombreTalle5_not_ends_with?: Maybe<Scalars['String']>;
  nombreTalle5_i?: Maybe<Scalars['String']>;
  nombreTalle5_not_i?: Maybe<Scalars['String']>;
  nombreTalle5_contains_i?: Maybe<Scalars['String']>;
  nombreTalle5_not_contains_i?: Maybe<Scalars['String']>;
  nombreTalle5_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle5_not_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle5_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle5_not_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle5_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombreTalle5_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cantidadTalle5?: Maybe<Scalars['Int']>;
  cantidadTalle5_not?: Maybe<Scalars['Int']>;
  cantidadTalle5_lt?: Maybe<Scalars['Int']>;
  cantidadTalle5_lte?: Maybe<Scalars['Int']>;
  cantidadTalle5_gt?: Maybe<Scalars['Int']>;
  cantidadTalle5_gte?: Maybe<Scalars['Int']>;
  cantidadTalle5_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  cantidadTalle5_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nombreTalle6?: Maybe<Scalars['String']>;
  nombreTalle6_not?: Maybe<Scalars['String']>;
  nombreTalle6_contains?: Maybe<Scalars['String']>;
  nombreTalle6_not_contains?: Maybe<Scalars['String']>;
  nombreTalle6_starts_with?: Maybe<Scalars['String']>;
  nombreTalle6_not_starts_with?: Maybe<Scalars['String']>;
  nombreTalle6_ends_with?: Maybe<Scalars['String']>;
  nombreTalle6_not_ends_with?: Maybe<Scalars['String']>;
  nombreTalle6_i?: Maybe<Scalars['String']>;
  nombreTalle6_not_i?: Maybe<Scalars['String']>;
  nombreTalle6_contains_i?: Maybe<Scalars['String']>;
  nombreTalle6_not_contains_i?: Maybe<Scalars['String']>;
  nombreTalle6_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle6_not_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle6_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle6_not_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle6_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombreTalle6_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cantidadTalle6?: Maybe<Scalars['Int']>;
  cantidadTalle6_not?: Maybe<Scalars['Int']>;
  cantidadTalle6_lt?: Maybe<Scalars['Int']>;
  cantidadTalle6_lte?: Maybe<Scalars['Int']>;
  cantidadTalle6_gt?: Maybe<Scalars['Int']>;
  cantidadTalle6_gte?: Maybe<Scalars['Int']>;
  cantidadTalle6_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  cantidadTalle6_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nombreTalle7?: Maybe<Scalars['String']>;
  nombreTalle7_not?: Maybe<Scalars['String']>;
  nombreTalle7_contains?: Maybe<Scalars['String']>;
  nombreTalle7_not_contains?: Maybe<Scalars['String']>;
  nombreTalle7_starts_with?: Maybe<Scalars['String']>;
  nombreTalle7_not_starts_with?: Maybe<Scalars['String']>;
  nombreTalle7_ends_with?: Maybe<Scalars['String']>;
  nombreTalle7_not_ends_with?: Maybe<Scalars['String']>;
  nombreTalle7_i?: Maybe<Scalars['String']>;
  nombreTalle7_not_i?: Maybe<Scalars['String']>;
  nombreTalle7_contains_i?: Maybe<Scalars['String']>;
  nombreTalle7_not_contains_i?: Maybe<Scalars['String']>;
  nombreTalle7_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle7_not_starts_with_i?: Maybe<Scalars['String']>;
  nombreTalle7_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle7_not_ends_with_i?: Maybe<Scalars['String']>;
  nombreTalle7_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombreTalle7_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cantidadTalle7?: Maybe<Scalars['Int']>;
  cantidadTalle7_not?: Maybe<Scalars['Int']>;
  cantidadTalle7_lt?: Maybe<Scalars['Int']>;
  cantidadTalle7_lte?: Maybe<Scalars['Int']>;
  cantidadTalle7_gt?: Maybe<Scalars['Int']>;
  cantidadTalle7_gte?: Maybe<Scalars['Int']>;
  cantidadTalle7_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  cantidadTalle7_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type StockWhereUniqueInput = {
  id: Scalars['ID'];
};

export type StocksCreateInput = {
  data?: Maybe<StockCreateInput>;
};

export type StocksUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<StockUpdateInput>;
};

/**  A keystone list  */
export type TipoDePrenda = {
  __typename?: 'TipoDePrenda';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  tipo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  producto: Array<Product>;
  _productoMeta?: Maybe<_QueryMeta>;
};


/**  A keystone list  */
export type TipoDePrendaProductoArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type TipoDePrenda_ProductoMetaArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type TipoDePrendaCreateInput = {
  tipo?: Maybe<Scalars['String']>;
  producto?: Maybe<ProductRelateToManyInput>;
};

export type TipoDePrendaRelateToManyInput = {
  create?: Maybe<Array<Maybe<TipoDePrendaCreateInput>>>;
  connect?: Maybe<Array<Maybe<TipoDePrendaWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<TipoDePrendaWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type TipoDePrendaRelateToOneInput = {
  create?: Maybe<TipoDePrendaCreateInput>;
  connect?: Maybe<TipoDePrendaWhereUniqueInput>;
  disconnect?: Maybe<TipoDePrendaWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type TipoDePrendaUpdateInput = {
  tipo?: Maybe<Scalars['String']>;
  producto?: Maybe<ProductRelateToManyInput>;
};

export type TipoDePrendaWhereInput = {
  AND?: Maybe<Array<Maybe<TipoDePrendaWhereInput>>>;
  OR?: Maybe<Array<Maybe<TipoDePrendaWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tipo?: Maybe<Scalars['String']>;
  tipo_not?: Maybe<Scalars['String']>;
  tipo_contains?: Maybe<Scalars['String']>;
  tipo_not_contains?: Maybe<Scalars['String']>;
  tipo_starts_with?: Maybe<Scalars['String']>;
  tipo_not_starts_with?: Maybe<Scalars['String']>;
  tipo_ends_with?: Maybe<Scalars['String']>;
  tipo_not_ends_with?: Maybe<Scalars['String']>;
  tipo_i?: Maybe<Scalars['String']>;
  tipo_not_i?: Maybe<Scalars['String']>;
  tipo_contains_i?: Maybe<Scalars['String']>;
  tipo_not_contains_i?: Maybe<Scalars['String']>;
  tipo_starts_with_i?: Maybe<Scalars['String']>;
  tipo_not_starts_with_i?: Maybe<Scalars['String']>;
  tipo_ends_with_i?: Maybe<Scalars['String']>;
  tipo_not_ends_with_i?: Maybe<Scalars['String']>;
  tipo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tipo_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  condition must be true for all nodes  */
  producto_every?: Maybe<ProductWhereInput>;
  /**  condition must be true for at least 1 node  */
  producto_some?: Maybe<ProductWhereInput>;
  /**  condition must be false for all nodes  */
  producto_none?: Maybe<ProductWhereInput>;
};

export type TipoDePrendaWhereUniqueInput = {
  id: Scalars['ID'];
};

export type TipoDePrendasCreateInput = {
  data?: Maybe<TipoDePrendaCreateInput>;
};

export type TipoDePrendasUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<TipoDePrendaUpdateInput>;
};


/**  A keystone list  */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  nombre?: Maybe<Scalars['String']>;
  apellido?: Maybe<Scalars['String']>;
  telefono?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  rol?: Maybe<Role>;
  cart: Array<CartItem>;
  _cartMeta?: Maybe<_QueryMeta>;
  ordenes: Array<Order>;
  _ordenesMeta?: Maybe<_QueryMeta>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type UserCartArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type User_CartMetaArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type UserOrdenesArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type User_OrdenesMetaArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordSuccess | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  sessionToken: Scalars['String'];
  item: User;
};

export type UserCreateInput = {
  nombre?: Maybe<Scalars['String']>;
  apellido?: Maybe<Scalars['String']>;
  telefono?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  rol?: Maybe<RoleRelateToOneInput>;
  cart?: Maybe<CartItemRelateToManyInput>;
  ordenes?: Maybe<OrderRelateToManyInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
};

export type UserRelateToManyInput = {
  create?: Maybe<Array<Maybe<UserCreateInput>>>;
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UserRelateToOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateInput = {
  nombre?: Maybe<Scalars['String']>;
  apellido?: Maybe<Scalars['String']>;
  telefono?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  rol?: Maybe<RoleRelateToOneInput>;
  cart?: Maybe<CartItemRelateToManyInput>;
  ordenes?: Maybe<OrderRelateToManyInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nombre?: Maybe<Scalars['String']>;
  nombre_not?: Maybe<Scalars['String']>;
  nombre_contains?: Maybe<Scalars['String']>;
  nombre_not_contains?: Maybe<Scalars['String']>;
  nombre_starts_with?: Maybe<Scalars['String']>;
  nombre_not_starts_with?: Maybe<Scalars['String']>;
  nombre_ends_with?: Maybe<Scalars['String']>;
  nombre_not_ends_with?: Maybe<Scalars['String']>;
  nombre_i?: Maybe<Scalars['String']>;
  nombre_not_i?: Maybe<Scalars['String']>;
  nombre_contains_i?: Maybe<Scalars['String']>;
  nombre_not_contains_i?: Maybe<Scalars['String']>;
  nombre_starts_with_i?: Maybe<Scalars['String']>;
  nombre_not_starts_with_i?: Maybe<Scalars['String']>;
  nombre_ends_with_i?: Maybe<Scalars['String']>;
  nombre_not_ends_with_i?: Maybe<Scalars['String']>;
  nombre_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nombre_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  apellido?: Maybe<Scalars['String']>;
  apellido_not?: Maybe<Scalars['String']>;
  apellido_contains?: Maybe<Scalars['String']>;
  apellido_not_contains?: Maybe<Scalars['String']>;
  apellido_starts_with?: Maybe<Scalars['String']>;
  apellido_not_starts_with?: Maybe<Scalars['String']>;
  apellido_ends_with?: Maybe<Scalars['String']>;
  apellido_not_ends_with?: Maybe<Scalars['String']>;
  apellido_i?: Maybe<Scalars['String']>;
  apellido_not_i?: Maybe<Scalars['String']>;
  apellido_contains_i?: Maybe<Scalars['String']>;
  apellido_not_contains_i?: Maybe<Scalars['String']>;
  apellido_starts_with_i?: Maybe<Scalars['String']>;
  apellido_not_starts_with_i?: Maybe<Scalars['String']>;
  apellido_ends_with_i?: Maybe<Scalars['String']>;
  apellido_not_ends_with_i?: Maybe<Scalars['String']>;
  apellido_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  apellido_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  telefono?: Maybe<Scalars['String']>;
  telefono_not?: Maybe<Scalars['String']>;
  telefono_contains?: Maybe<Scalars['String']>;
  telefono_not_contains?: Maybe<Scalars['String']>;
  telefono_starts_with?: Maybe<Scalars['String']>;
  telefono_not_starts_with?: Maybe<Scalars['String']>;
  telefono_ends_with?: Maybe<Scalars['String']>;
  telefono_not_ends_with?: Maybe<Scalars['String']>;
  telefono_i?: Maybe<Scalars['String']>;
  telefono_not_i?: Maybe<Scalars['String']>;
  telefono_contains_i?: Maybe<Scalars['String']>;
  telefono_not_contains_i?: Maybe<Scalars['String']>;
  telefono_starts_with_i?: Maybe<Scalars['String']>;
  telefono_not_starts_with_i?: Maybe<Scalars['String']>;
  telefono_ends_with_i?: Maybe<Scalars['String']>;
  telefono_not_ends_with_i?: Maybe<Scalars['String']>;
  telefono_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  telefono_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  rol?: Maybe<RoleWhereInput>;
  rol_is_null?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  cart_every?: Maybe<CartItemWhereInput>;
  /**  condition must be true for at least 1 node  */
  cart_some?: Maybe<CartItemWhereInput>;
  /**  condition must be false for all nodes  */
  cart_none?: Maybe<CartItemWhereInput>;
  /**  condition must be true for all nodes  */
  ordenes_every?: Maybe<OrderWhereInput>;
  /**  condition must be true for at least 1 node  */
  ordenes_some?: Maybe<OrderWhereInput>;
  /**  condition must be false for all nodes  */
  ordenes_none?: Maybe<OrderWhereInput>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_not?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetIssuedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_not?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type AddToCartMutationVariables = Exact<{
  id: Scalars['ID'];
  color: Scalars['String'];
  talle?: Maybe<Scalars['String']>;
}>;


export type AddToCartMutation = (
  { __typename?: 'Mutation' }
  & { addToCart?: Maybe<(
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id'>
  )> }
);

export type AllBrandsQueryVariables = Exact<{
  tipoDePrenda?: Maybe<Scalars['String']>;
}>;


export type AllBrandsQuery = (
  { __typename?: 'Query' }
  & { allBrands?: Maybe<Array<Maybe<(
    { __typename?: 'Brand' }
    & Pick<Brand, 'marca' | 'slug' | 'id'>
    & { tipoDePrenda: Array<(
      { __typename?: 'TipoDePrenda' }
      & Pick<TipoDePrenda, 'id' | 'tipo'>
    )> }
  )>>> }
);

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = (
  { __typename?: 'Query' }
  & { allProducts?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'nombre' | 'articulo' | 'slug' | 'descripcion' | 'precio'>
    & { tipoDePrenda?: Maybe<(
      { __typename?: 'TipoDePrenda' }
      & Pick<TipoDePrenda, 'id' | 'tipo'>
    )>, marca?: Maybe<(
      { __typename?: 'Brand' }
      & Pick<Brand, 'id' | 'marca'>
    )>, stock: Array<(
      { __typename?: 'Stock' }
      & Pick<Stock, 'id' | 'color'>
    )>, imagen: Array<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'id'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )>>> }
);

export type PaginationQueryVariables = Exact<{
  tipoDePrenda?: Maybe<Scalars['String']>;
  marca?: Maybe<Scalars['String']>;
}>;


export type PaginationQuery = (
  { __typename?: 'Query' }
  & { _allProductsMeta?: Maybe<(
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'nombre' | 'apellido' | 'telefono'>
    & { cart: Array<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'id' | 'cantidad'>
      & { producto?: Maybe<(
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'articulo' | 'precio' | 'nombre' | 'descripcion'>
        & { imagen: Array<(
          { __typename?: 'ProductImage' }
          & Pick<ProductImage, 'id'>
          & { image?: Maybe<(
            { __typename?: 'CloudinaryImage_File' }
            & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
          )> }
        )>, stock: Array<(
          { __typename?: 'Stock' }
          & Pick<Stock, 'id' | 'color'>
        )>, tipoDePrenda?: Maybe<(
          { __typename?: 'TipoDePrenda' }
          & Pick<TipoDePrenda, 'id' | 'tipo'>
        )>, marca?: Maybe<(
          { __typename?: 'Brand' }
          & Pick<Brand, 'id' | 'marca'>
        )> }
      )> }
    )> }
  )> }
);

export type DeleteCartItemMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCartItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteCartItem?: Maybe<(
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id'>
  )> }
);

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductByIdQuery = (
  { __typename?: 'Query' }
  & { Product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'nombre' | 'articulo' | 'descripcion' | 'precio'>
    & { marca?: Maybe<(
      { __typename?: 'Brand' }
      & Pick<Brand, 'id' | 'marca'>
    )>, tipoDePrenda?: Maybe<(
      { __typename?: 'TipoDePrenda' }
      & Pick<TipoDePrenda, 'id' | 'tipo'>
    )>, stock: Array<(
      { __typename?: 'Stock' }
      & Pick<Stock, 'id' | 'color' | 'nombreTalle1' | 'cantidadTalle1' | 'nombreTalle2' | 'cantidadTalle2' | 'nombreTalle3' | 'cantidadTalle3' | 'nombreTalle4' | 'cantidadTalle4' | 'nombreTalle5' | 'cantidadTalle5' | 'nombreTalle6' | 'cantidadTalle6' | 'nombreTalle7' | 'cantidadTalle7'>
    )>, imagen: Array<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'id'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )> }
);

export type ProductsPerPageQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  tipoDePrenda?: Maybe<Scalars['String']>;
  marca?: Maybe<Scalars['String']>;
}>;


export type ProductsPerPageQuery = (
  { __typename?: 'Query' }
  & { allProducts?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'nombre' | 'articulo' | 'slug' | 'descripcion' | 'precio'>
    & { tipoDePrenda?: Maybe<(
      { __typename?: 'TipoDePrenda' }
      & Pick<TipoDePrenda, 'id' | 'tipo'>
    )>, marca?: Maybe<(
      { __typename?: 'Brand' }
      & Pick<Brand, 'id' | 'marca'>
    )>, stock: Array<(
      { __typename?: 'Stock' }
      & Pick<Stock, 'id' | 'color'>
    )>, imagen: Array<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'id'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )>>> }
);

export type RedeemPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
}>;


export type RedeemPasswordResetMutation = (
  { __typename?: 'Mutation' }
  & { redeemUserPasswordResetToken?: Maybe<(
    { __typename?: 'RedeemUserPasswordResetTokenResult' }
    & Pick<RedeemUserPasswordResetTokenResult, 'code' | 'message'>
  )> }
);

export type RequestResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestResetMutation = (
  { __typename?: 'Mutation' }
  & { sendUserPasswordResetLink?: Maybe<(
    { __typename?: 'SendUserPasswordResetLinkResult' }
    & Pick<SendUserPasswordResetLinkResult, 'code' | 'message'>
  )> }
);

export type SearchProductsQueryVariables = Exact<{
  searchTerm: Scalars['String'];
}>;


export type SearchProductsQuery = (
  { __typename?: 'Query' }
  & { searchTerms?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'nombre' | 'slug'>
    & { imagen: Array<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'id'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )>>> }
);

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { authenticateUserWithPassword: (
    { __typename?: 'UserAuthenticationWithPasswordSuccess' }
    & { item: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'nombre' | 'apellido' | 'telefono'>
    ) }
  ) | (
    { __typename?: 'UserAuthenticationWithPasswordFailure' }
    & Pick<UserAuthenticationWithPasswordFailure, 'code' | 'message'>
  ) }
);

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'endSession'>
);

export type SignUpMutationVariables = Exact<{
  nombre: Scalars['String'];
  apellido: Scalars['String'];
  telefono?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'nombre' | 'apellido' | 'telefono'>
  )> }
);

export type ProductByBrandQueryVariables = Exact<{
  marca: Scalars['String'];
}>;


export type ProductByBrandQuery = (
  { __typename?: 'Query' }
  & { allProducts?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'nombre' | 'articulo' | 'slug' | 'descripcion' | 'precio'>
    & { tipoDePrenda?: Maybe<(
      { __typename?: 'TipoDePrenda' }
      & Pick<TipoDePrenda, 'id' | 'tipo'>
    )>, marca?: Maybe<(
      { __typename?: 'Brand' }
      & Pick<Brand, 'id' | 'marca'>
    )>, stock: Array<(
      { __typename?: 'Stock' }
      & Pick<Stock, 'id' | 'color'>
    )>, imagen: Array<(
      { __typename?: 'ProductImage' }
      & Pick<ProductImage, 'id'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )>>> }
);


export const AddToCartDocument = gql`
    mutation AddToCart($id: ID!, $color: String!, $talle: String) {
  addToCart(productId: $id, color: $color, talle: $talle) {
    id
  }
}
    `;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      id: // value for 'id'
 *      color: // value for 'color'
 *      talle: // value for 'talle'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, options);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const AllBrandsDocument = gql`
    query allBrands($tipoDePrenda: String) {
  allBrands(where: {tipoDePrenda_some: {tipo_i: $tipoDePrenda}}) {
    marca
    slug
    id
    tipoDePrenda {
      id
      tipo
    }
  }
}
    `;

/**
 * __useAllBrandsQuery__
 *
 * To run a query within a React component, call `useAllBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBrandsQuery({
 *   variables: {
 *      tipoDePrenda: // value for 'tipoDePrenda'
 *   },
 * });
 */
export function useAllBrandsQuery(baseOptions?: Apollo.QueryHookOptions<AllBrandsQuery, AllBrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllBrandsQuery, AllBrandsQueryVariables>(AllBrandsDocument, options);
      }
export function useAllBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBrandsQuery, AllBrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllBrandsQuery, AllBrandsQueryVariables>(AllBrandsDocument, options);
        }
export type AllBrandsQueryHookResult = ReturnType<typeof useAllBrandsQuery>;
export type AllBrandsLazyQueryHookResult = ReturnType<typeof useAllBrandsLazyQuery>;
export type AllBrandsQueryResult = Apollo.QueryResult<AllBrandsQuery, AllBrandsQueryVariables>;
export function refetchAllBrandsQuery(variables?: AllBrandsQueryVariables) {
      return { query: AllBrandsDocument, variables: variables }
    }
export const AllProductsDocument = gql`
    query AllProducts {
  allProducts {
    id
    nombre
    articulo
    slug
    descripcion
    precio
    tipoDePrenda {
      id
      tipo
    }
    marca {
      id
      marca
    }
    stock {
      id
      color
    }
    imagen {
      id
      image {
        publicUrlTransformed
      }
    }
  }
}
    `;

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
      }
export function useAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
        }
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export function refetchAllProductsQuery(variables?: AllProductsQueryVariables) {
      return { query: AllProductsDocument, variables: variables }
    }
export const PaginationDocument = gql`
    query Pagination($tipoDePrenda: String, $marca: String) {
  _allProductsMeta(
    where: {tipoDePrenda: {tipo_i: $tipoDePrenda}, marca: {marca_i: $marca}}
  ) {
    count
  }
}
    `;

/**
 * __usePaginationQuery__
 *
 * To run a query within a React component, call `usePaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginationQuery({
 *   variables: {
 *      tipoDePrenda: // value for 'tipoDePrenda'
 *      marca: // value for 'marca'
 *   },
 * });
 */
export function usePaginationQuery(baseOptions?: Apollo.QueryHookOptions<PaginationQuery, PaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginationQuery, PaginationQueryVariables>(PaginationDocument, options);
      }
export function usePaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginationQuery, PaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginationQuery, PaginationQueryVariables>(PaginationDocument, options);
        }
export type PaginationQueryHookResult = ReturnType<typeof usePaginationQuery>;
export type PaginationLazyQueryHookResult = ReturnType<typeof usePaginationLazyQuery>;
export type PaginationQueryResult = Apollo.QueryResult<PaginationQuery, PaginationQueryVariables>;
export function refetchPaginationQuery(variables?: PaginationQueryVariables) {
      return { query: PaginationDocument, variables: variables }
    }
export const CurrentUserDocument = gql`
    query CurrentUser {
  authenticatedItem {
    ... on User {
      id
      email
      nombre
      apellido
      telefono
      cart {
        id
        cantidad
        producto {
          id
          articulo
          precio
          nombre
          descripcion
          imagen {
            id
            image {
              publicUrlTransformed
            }
          }
          stock {
            id
            color
          }
          tipoDePrenda {
            id
            tipo
          }
          marca {
            id
            marca
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export function refetchCurrentUserQuery(variables?: CurrentUserQueryVariables) {
      return { query: CurrentUserDocument, variables: variables }
    }
export const DeleteCartItemDocument = gql`
    mutation deleteCartItem($id: ID!) {
  deleteCartItem(id: $id) {
    id
  }
}
    `;
export type DeleteCartItemMutationFn = Apollo.MutationFunction<DeleteCartItemMutation, DeleteCartItemMutationVariables>;

/**
 * __useDeleteCartItemMutation__
 *
 * To run a mutation, you first call `useDeleteCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartItemMutation, { data, loading, error }] = useDeleteCartItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCartItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCartItemMutation, DeleteCartItemMutationVariables>(DeleteCartItemDocument, options);
      }
export type DeleteCartItemMutationHookResult = ReturnType<typeof useDeleteCartItemMutation>;
export type DeleteCartItemMutationResult = Apollo.MutationResult<DeleteCartItemMutation>;
export type DeleteCartItemMutationOptions = Apollo.BaseMutationOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>;
export const ProductByIdDocument = gql`
    query productById($id: ID!) {
  Product(where: {id: $id}) {
    id
    nombre
    articulo
    descripcion
    precio
    marca {
      id
      marca
    }
    tipoDePrenda {
      id
      tipo
    }
    stock {
      id
      color
      nombreTalle1
      cantidadTalle1
      nombreTalle2
      cantidadTalle2
      nombreTalle3
      cantidadTalle3
      nombreTalle4
      cantidadTalle4
      nombreTalle5
      cantidadTalle5
      nombreTalle6
      cantidadTalle6
      nombreTalle7
      cantidadTalle7
    }
    imagen {
      id
      image {
        publicUrlTransformed
      }
    }
  }
}
    `;

/**
 * __useProductByIdQuery__
 *
 * To run a query within a React component, call `useProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductByIdQuery(baseOptions: Apollo.QueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
      }
export function useProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
        }
export type ProductByIdQueryHookResult = ReturnType<typeof useProductByIdQuery>;
export type ProductByIdLazyQueryHookResult = ReturnType<typeof useProductByIdLazyQuery>;
export type ProductByIdQueryResult = Apollo.QueryResult<ProductByIdQuery, ProductByIdQueryVariables>;
export function refetchProductByIdQuery(variables?: ProductByIdQueryVariables) {
      return { query: ProductByIdDocument, variables: variables }
    }
export const ProductsPerPageDocument = gql`
    query ProductsPerPage($skip: Int = 0, $first: Int, $tipoDePrenda: String, $marca: String) {
  allProducts(
    first: $first
    skip: $skip
    where: {tipoDePrenda: {tipo_i: $tipoDePrenda}, marca: {marca_i: $marca}}
  ) {
    id
    nombre
    articulo
    slug
    descripcion
    precio
    tipoDePrenda {
      id
      tipo
    }
    marca {
      id
      marca
    }
    stock {
      id
      color
    }
    imagen {
      id
      image {
        publicUrlTransformed
      }
    }
  }
}
    `;

/**
 * __useProductsPerPageQuery__
 *
 * To run a query within a React component, call `useProductsPerPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsPerPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsPerPageQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      tipoDePrenda: // value for 'tipoDePrenda'
 *      marca: // value for 'marca'
 *   },
 * });
 */
export function useProductsPerPageQuery(baseOptions?: Apollo.QueryHookOptions<ProductsPerPageQuery, ProductsPerPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsPerPageQuery, ProductsPerPageQueryVariables>(ProductsPerPageDocument, options);
      }
export function useProductsPerPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsPerPageQuery, ProductsPerPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsPerPageQuery, ProductsPerPageQueryVariables>(ProductsPerPageDocument, options);
        }
export type ProductsPerPageQueryHookResult = ReturnType<typeof useProductsPerPageQuery>;
export type ProductsPerPageLazyQueryHookResult = ReturnType<typeof useProductsPerPageLazyQuery>;
export type ProductsPerPageQueryResult = Apollo.QueryResult<ProductsPerPageQuery, ProductsPerPageQueryVariables>;
export function refetchProductsPerPageQuery(variables?: ProductsPerPageQueryVariables) {
      return { query: ProductsPerPageDocument, variables: variables }
    }
export const RedeemPasswordResetDocument = gql`
    mutation redeemPasswordReset($email: String!, $password: String!, $token: String!) {
  redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {
    code
    message
  }
}
    `;
export type RedeemPasswordResetMutationFn = Apollo.MutationFunction<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>;

/**
 * __useRedeemPasswordResetMutation__
 *
 * To run a mutation, you first call `useRedeemPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRedeemPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [redeemPasswordResetMutation, { data, loading, error }] = useRedeemPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useRedeemPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>(RedeemPasswordResetDocument, options);
      }
export type RedeemPasswordResetMutationHookResult = ReturnType<typeof useRedeemPasswordResetMutation>;
export type RedeemPasswordResetMutationResult = Apollo.MutationResult<RedeemPasswordResetMutation>;
export type RedeemPasswordResetMutationOptions = Apollo.BaseMutationOptions<RedeemPasswordResetMutation, RedeemPasswordResetMutationVariables>;
export const RequestResetDocument = gql`
    mutation requestReset($email: String!) {
  sendUserPasswordResetLink(email: $email) {
    code
    message
  }
}
    `;
export type RequestResetMutationFn = Apollo.MutationFunction<RequestResetMutation, RequestResetMutationVariables>;

/**
 * __useRequestResetMutation__
 *
 * To run a mutation, you first call `useRequestResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetMutation, { data, loading, error }] = useRequestResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetMutation(baseOptions?: Apollo.MutationHookOptions<RequestResetMutation, RequestResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestResetMutation, RequestResetMutationVariables>(RequestResetDocument, options);
      }
export type RequestResetMutationHookResult = ReturnType<typeof useRequestResetMutation>;
export type RequestResetMutationResult = Apollo.MutationResult<RequestResetMutation>;
export type RequestResetMutationOptions = Apollo.BaseMutationOptions<RequestResetMutation, RequestResetMutationVariables>;
export const SearchProductsDocument = gql`
    query searchProducts($searchTerm: String!) {
  searchTerms: allProducts(
    where: {OR: [{nombre_contains_i: $searchTerm}, {articulo_contains_i: $searchTerm}, {descripcion_contains_i: $searchTerm}]}
  ) {
    id
    nombre
    slug
    imagen {
      id
      image {
        publicUrlTransformed
      }
    }
  }
}
    `;

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a React component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useSearchProductsQuery(baseOptions: Apollo.QueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
      }
export function useSearchProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
        }
export type SearchProductsQueryHookResult = ReturnType<typeof useSearchProductsQuery>;
export type SearchProductsLazyQueryHookResult = ReturnType<typeof useSearchProductsLazyQuery>;
export type SearchProductsQueryResult = Apollo.QueryResult<SearchProductsQuery, SearchProductsQueryVariables>;
export function refetchSearchProductsQuery(variables?: SearchProductsQueryVariables) {
      return { query: SearchProductsDocument, variables: variables }
    }
export const SignInDocument = gql`
    mutation signIn($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      item {
        id
        email
        nombre
        apellido
        telefono
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      code
      message
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
    mutation SignOut {
  endSession
}
    `;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($nombre: String!, $apellido: String!, $telefono: String, $email: String!, $password: String!) {
  createUser(
    data: {nombre: $nombre, apellido: $apellido, telefono: $telefono, email: $email, password: $password}
  ) {
    id
    email
    nombre
    apellido
    telefono
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      nombre: // value for 'nombre'
 *      apellido: // value for 'apellido'
 *      telefono: // value for 'telefono'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const ProductByBrandDocument = gql`
    query productByBrand($marca: String!) {
  allProducts(where: {marca: {marca_i: $marca}}) {
    id
    nombre
    articulo
    slug
    descripcion
    precio
    tipoDePrenda {
      id
      tipo
    }
    marca {
      id
      marca
    }
    stock {
      id
      color
    }
    imagen {
      id
      image {
        publicUrlTransformed
      }
    }
  }
}
    `;

/**
 * __useProductByBrandQuery__
 *
 * To run a query within a React component, call `useProductByBrandQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByBrandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByBrandQuery({
 *   variables: {
 *      marca: // value for 'marca'
 *   },
 * });
 */
export function useProductByBrandQuery(baseOptions: Apollo.QueryHookOptions<ProductByBrandQuery, ProductByBrandQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductByBrandQuery, ProductByBrandQueryVariables>(ProductByBrandDocument, options);
      }
export function useProductByBrandLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductByBrandQuery, ProductByBrandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductByBrandQuery, ProductByBrandQueryVariables>(ProductByBrandDocument, options);
        }
export type ProductByBrandQueryHookResult = ReturnType<typeof useProductByBrandQuery>;
export type ProductByBrandLazyQueryHookResult = ReturnType<typeof useProductByBrandLazyQuery>;
export type ProductByBrandQueryResult = Apollo.QueryResult<ProductByBrandQuery, ProductByBrandQueryVariables>;
export function refetchProductByBrandQuery(variables?: ProductByBrandQueryVariables) {
      return { query: ProductByBrandDocument, variables: variables }
    }
export type BrandKeySpecifier = ('id' | 'label' | 'marca' | 'slug' | 'tipoDePrenda' | '_tipoDePrendaMeta' | 'producto' | '_productoMeta' | BrandKeySpecifier)[];
export type BrandFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	marca?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	tipoDePrenda?: FieldPolicy<any> | FieldReadFunction<any>,
	_tipoDePrendaMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	producto?: FieldPolicy<any> | FieldReadFunction<any>,
	_productoMeta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemKeySpecifier = ('id' | 'cantidad' | 'colorSeleccionado' | 'talleSeleccionado' | 'producto' | 'usuario' | CartItemKeySpecifier)[];
export type CartItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	cantidad?: FieldPolicy<any> | FieldReadFunction<any>,
	colorSeleccionado?: FieldPolicy<any> | FieldReadFunction<any>,
	talleSeleccionado?: FieldPolicy<any> | FieldReadFunction<any>,
	producto?: FieldPolicy<any> | FieldReadFunction<any>,
	usuario?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CloudinaryImage_FileKeySpecifier = ('id' | 'path' | 'filename' | 'originalFilename' | 'mimetype' | 'encoding' | 'publicUrl' | 'publicUrlTransformed' | CloudinaryImage_FileKeySpecifier)[];
export type CloudinaryImage_FileFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	originalFilename?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	publicUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	publicUrlTransformed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminMetaKeySpecifier = ('enableSignout' | 'enableSessionItem' | 'lists' | 'list' | KeystoneAdminMetaKeySpecifier)[];
export type KeystoneAdminMetaFieldPolicy = {
	enableSignout?: FieldPolicy<any> | FieldReadFunction<any>,
	enableSessionItem?: FieldPolicy<any> | FieldReadFunction<any>,
	lists?: FieldPolicy<any> | FieldReadFunction<any>,
	list?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaKeySpecifier = ('path' | 'label' | 'isOrderable' | 'fieldMeta' | 'viewsIndex' | 'customViewsIndex' | 'createView' | 'listView' | 'itemView' | KeystoneAdminUIFieldMetaKeySpecifier)[];
export type KeystoneAdminUIFieldMetaFieldPolicy = {
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	isOrderable?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	viewsIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	customViewsIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	createView?: FieldPolicy<any> | FieldReadFunction<any>,
	listView?: FieldPolicy<any> | FieldReadFunction<any>,
	itemView?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaCreateViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaCreateViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaCreateViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaItemViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaItemViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaItemViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaListViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaListViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaListViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIListMetaKeySpecifier = ('key' | 'itemQueryName' | 'listQueryName' | 'hideCreate' | 'hideDelete' | 'path' | 'label' | 'singular' | 'plural' | 'description' | 'initialColumns' | 'pageSize' | 'labelField' | 'fields' | 'initialSort' | 'isHidden' | KeystoneAdminUIListMetaKeySpecifier)[];
export type KeystoneAdminUIListMetaFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	itemQueryName?: FieldPolicy<any> | FieldReadFunction<any>,
	listQueryName?: FieldPolicy<any> | FieldReadFunction<any>,
	hideCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	hideDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	singular?: FieldPolicy<any> | FieldReadFunction<any>,
	plural?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	initialColumns?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>,
	labelField?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	initialSort?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUISortKeySpecifier = ('field' | 'direction' | KeystoneAdminUISortKeySpecifier)[];
export type KeystoneAdminUISortFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	direction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneMetaKeySpecifier = ('adminMeta' | KeystoneMetaKeySpecifier)[];
export type KeystoneMetaFieldPolicy = {
	adminMeta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createUser' | 'createUsers' | 'updateUser' | 'updateUsers' | 'deleteUser' | 'deleteUsers' | 'createProduct' | 'createProducts' | 'updateProduct' | 'updateProducts' | 'deleteProduct' | 'deleteProducts' | 'createProductImage' | 'createProductImages' | 'updateProductImage' | 'updateProductImages' | 'deleteProductImage' | 'deleteProductImages' | 'createStock' | 'createStocks' | 'updateStock' | 'updateStocks' | 'deleteStock' | 'deleteStocks' | 'createRole' | 'createRoles' | 'updateRole' | 'updateRoles' | 'deleteRole' | 'deleteRoles' | 'createOrderItem' | 'createOrderItems' | 'updateOrderItem' | 'updateOrderItems' | 'deleteOrderItem' | 'deleteOrderItems' | 'createCartItem' | 'createCartItems' | 'updateCartItem' | 'updateCartItems' | 'deleteCartItem' | 'deleteCartItems' | 'createOrder' | 'createOrders' | 'updateOrder' | 'updateOrders' | 'deleteOrder' | 'deleteOrders' | 'createBrand' | 'createBrands' | 'updateBrand' | 'updateBrands' | 'deleteBrand' | 'deleteBrands' | 'createTipoDePrenda' | 'createTipoDePrendas' | 'updateTipoDePrenda' | 'updateTipoDePrendas' | 'deleteTipoDePrenda' | 'deleteTipoDePrendas' | 'authenticateUserWithPassword' | 'createInitialUser' | 'sendUserPasswordResetLink' | 'redeemUserPasswordResetToken' | 'addToCart' | 'endSession' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	createProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	createProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	createStock?: FieldPolicy<any> | FieldReadFunction<any>,
	createStocks?: FieldPolicy<any> | FieldReadFunction<any>,
	updateStock?: FieldPolicy<any> | FieldReadFunction<any>,
	updateStocks?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteStock?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteStocks?: FieldPolicy<any> | FieldReadFunction<any>,
	createRole?: FieldPolicy<any> | FieldReadFunction<any>,
	createRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRole?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRole?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	createCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	createCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	createBrand?: FieldPolicy<any> | FieldReadFunction<any>,
	createBrands?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBrand?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBrands?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBrand?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBrands?: FieldPolicy<any> | FieldReadFunction<any>,
	createTipoDePrenda?: FieldPolicy<any> | FieldReadFunction<any>,
	createTipoDePrendas?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTipoDePrenda?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTipoDePrendas?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTipoDePrenda?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTipoDePrendas?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticateUserWithPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	createInitialUser?: FieldPolicy<any> | FieldReadFunction<any>,
	sendUserPasswordResetLink?: FieldPolicy<any> | FieldReadFunction<any>,
	redeemUserPasswordResetToken?: FieldPolicy<any> | FieldReadFunction<any>,
	addToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	endSession?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('id' | 'label' | 'total' | 'items' | '_itemsMeta' | 'usuario' | 'charge' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	_itemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	usuario?: FieldPolicy<any> | FieldReadFunction<any>,
	charge?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderItemKeySpecifier = ('id' | 'articulo' | 'nombre' | 'slug' | 'descripcion' | 'imagen' | '_imagenMeta' | 'status' | 'precio' | 'tipoDePrenda' | 'talle' | 'color' | 'cantidad' | 'marca' | 'orden' | OrderItemKeySpecifier)[];
export type OrderItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	articulo?: FieldPolicy<any> | FieldReadFunction<any>,
	nombre?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	descripcion?: FieldPolicy<any> | FieldReadFunction<any>,
	imagen?: FieldPolicy<any> | FieldReadFunction<any>,
	_imagenMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	precio?: FieldPolicy<any> | FieldReadFunction<any>,
	tipoDePrenda?: FieldPolicy<any> | FieldReadFunction<any>,
	talle?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	cantidad?: FieldPolicy<any> | FieldReadFunction<any>,
	marca?: FieldPolicy<any> | FieldReadFunction<any>,
	orden?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('id' | 'label' | 'articulo' | 'nombre' | 'slug' | 'descripcion' | 'imagen' | '_imagenMeta' | 'status' | 'precio' | 'tipoDePrenda' | 'categoria' | 'stock' | '_stockMeta' | 'marca' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	articulo?: FieldPolicy<any> | FieldReadFunction<any>,
	nombre?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	descripcion?: FieldPolicy<any> | FieldReadFunction<any>,
	imagen?: FieldPolicy<any> | FieldReadFunction<any>,
	_imagenMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	precio?: FieldPolicy<any> | FieldReadFunction<any>,
	tipoDePrenda?: FieldPolicy<any> | FieldReadFunction<any>,
	categoria?: FieldPolicy<any> | FieldReadFunction<any>,
	stock?: FieldPolicy<any> | FieldReadFunction<any>,
	_stockMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	marca?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageKeySpecifier = ('id' | 'image' | 'altText' | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	altText?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('allUsers' | 'User' | '_allUsersMeta' | 'allProducts' | 'Product' | '_allProductsMeta' | 'allProductImages' | 'ProductImage' | '_allProductImagesMeta' | 'allStocks' | 'Stock' | '_allStocksMeta' | 'allRoles' | 'Role' | '_allRolesMeta' | 'allOrderItems' | 'OrderItem' | '_allOrderItemsMeta' | 'allCartItems' | 'CartItem' | '_allCartItemsMeta' | 'allOrders' | 'Order' | '_allOrdersMeta' | 'allBrands' | 'Brand' | '_allBrandsMeta' | 'allTipoDePrendas' | 'TipoDePrenda' | '_allTipoDePrendasMeta' | 'authenticatedItem' | 'validateUserPasswordResetToken' | 'keystone' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	allUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	_allUsersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	Product?: FieldPolicy<any> | FieldReadFunction<any>,
	_allProductsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	ProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	_allProductImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allStocks?: FieldPolicy<any> | FieldReadFunction<any>,
	Stock?: FieldPolicy<any> | FieldReadFunction<any>,
	_allStocksMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	Role?: FieldPolicy<any> | FieldReadFunction<any>,
	_allRolesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	OrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	_allOrderItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	CartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	_allCartItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	Order?: FieldPolicy<any> | FieldReadFunction<any>,
	_allOrdersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allBrands?: FieldPolicy<any> | FieldReadFunction<any>,
	Brand?: FieldPolicy<any> | FieldReadFunction<any>,
	_allBrandsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allTipoDePrendas?: FieldPolicy<any> | FieldReadFunction<any>,
	TipoDePrenda?: FieldPolicy<any> | FieldReadFunction<any>,
	_allTipoDePrendasMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticatedItem?: FieldPolicy<any> | FieldReadFunction<any>,
	validateUserPasswordResetToken?: FieldPolicy<any> | FieldReadFunction<any>,
	keystone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RedeemUserPasswordResetTokenResultKeySpecifier = ('code' | 'message' | RedeemUserPasswordResetTokenResultKeySpecifier)[];
export type RedeemUserPasswordResetTokenResultFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleKeySpecifier = ('id' | 'nombre' | 'canManageProducts' | 'canSeeOtherUsers' | 'canManageUsers' | 'canManageRoles' | 'canManageCart' | 'canManageOrders' | 'asignado' | '_asignadoMeta' | RoleKeySpecifier)[];
export type RoleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nombre?: FieldPolicy<any> | FieldReadFunction<any>,
	canManageProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	canSeeOtherUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	canManageUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	canManageRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	canManageCart?: FieldPolicy<any> | FieldReadFunction<any>,
	canManageOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	asignado?: FieldPolicy<any> | FieldReadFunction<any>,
	_asignadoMeta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendUserPasswordResetLinkResultKeySpecifier = ('code' | 'message' | SendUserPasswordResetLinkResultKeySpecifier)[];
export type SendUserPasswordResetLinkResultFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StockKeySpecifier = ('id' | 'label' | 'producto' | 'color' | 'nombreTalle1' | 'cantidadTalle1' | 'nombreTalle2' | 'cantidadTalle2' | 'nombreTalle3' | 'cantidadTalle3' | 'nombreTalle4' | 'cantidadTalle4' | 'nombreTalle5' | 'cantidadTalle5' | 'nombreTalle6' | 'cantidadTalle6' | 'nombreTalle7' | 'cantidadTalle7' | StockKeySpecifier)[];
export type StockFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	producto?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	nombreTalle1?: FieldPolicy<any> | FieldReadFunction<any>,
	cantidadTalle1?: FieldPolicy<any> | FieldReadFunction<any>,
	nombreTalle2?: FieldPolicy<any> | FieldReadFunction<any>,
	cantidadTalle2?: FieldPolicy<any> | FieldReadFunction<any>,
	nombreTalle3?: FieldPolicy<any> | FieldReadFunction<any>,
	cantidadTalle3?: FieldPolicy<any> | FieldReadFunction<any>,
	nombreTalle4?: FieldPolicy<any> | FieldReadFunction<any>,
	cantidadTalle4?: FieldPolicy<any> | FieldReadFunction<any>,
	nombreTalle5?: FieldPolicy<any> | FieldReadFunction<any>,
	cantidadTalle5?: FieldPolicy<any> | FieldReadFunction<any>,
	nombreTalle6?: FieldPolicy<any> | FieldReadFunction<any>,
	cantidadTalle6?: FieldPolicy<any> | FieldReadFunction<any>,
	nombreTalle7?: FieldPolicy<any> | FieldReadFunction<any>,
	cantidadTalle7?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TipoDePrendaKeySpecifier = ('id' | 'label' | 'tipo' | 'slug' | 'producto' | '_productoMeta' | TipoDePrendaKeySpecifier)[];
export type TipoDePrendaFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	tipo?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	producto?: FieldPolicy<any> | FieldReadFunction<any>,
	_productoMeta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'nombre' | 'apellido' | 'telefono' | 'email' | 'password_is_set' | 'rol' | 'cart' | '_cartMeta' | 'ordenes' | '_ordenesMeta' | 'passwordResetToken_is_set' | 'passwordResetIssuedAt' | 'passwordResetRedeemedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nombre?: FieldPolicy<any> | FieldReadFunction<any>,
	apellido?: FieldPolicy<any> | FieldReadFunction<any>,
	telefono?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	password_is_set?: FieldPolicy<any> | FieldReadFunction<any>,
	rol?: FieldPolicy<any> | FieldReadFunction<any>,
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	_cartMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	ordenes?: FieldPolicy<any> | FieldReadFunction<any>,
	_ordenesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordResetToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordResetIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordResetRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticationWithPasswordFailureKeySpecifier = ('code' | 'message' | UserAuthenticationWithPasswordFailureKeySpecifier)[];
export type UserAuthenticationWithPasswordFailureFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticationWithPasswordSuccessKeySpecifier = ('sessionToken' | 'item' | UserAuthenticationWithPasswordSuccessKeySpecifier)[];
export type UserAuthenticationWithPasswordSuccessFieldPolicy = {
	sessionToken?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidateUserPasswordResetTokenResultKeySpecifier = ('code' | 'message' | ValidateUserPasswordResetTokenResultKeySpecifier)[];
export type ValidateUserPasswordResetTokenResultFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _QueryMetaKeySpecifier = ('count' | _QueryMetaKeySpecifier)[];
export type _QueryMetaFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Brand?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrandKeySpecifier | (() => undefined | BrandKeySpecifier),
		fields?: BrandFieldPolicy,
	},
	CartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemKeySpecifier | (() => undefined | CartItemKeySpecifier),
		fields?: CartItemFieldPolicy,
	},
	CloudinaryImage_File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CloudinaryImage_FileKeySpecifier | (() => undefined | CloudinaryImage_FileKeySpecifier),
		fields?: CloudinaryImage_FileFieldPolicy,
	},
	KeystoneAdminMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminMetaKeySpecifier | (() => undefined | KeystoneAdminMetaKeySpecifier),
		fields?: KeystoneAdminMetaFieldPolicy,
	},
	KeystoneAdminUIFieldMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaFieldPolicy,
	},
	KeystoneAdminUIFieldMetaCreateView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaCreateViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaCreateViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaCreateViewFieldPolicy,
	},
	KeystoneAdminUIFieldMetaItemView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaItemViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaItemViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaItemViewFieldPolicy,
	},
	KeystoneAdminUIFieldMetaListView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaListViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaListViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaListViewFieldPolicy,
	},
	KeystoneAdminUIListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIListMetaKeySpecifier | (() => undefined | KeystoneAdminUIListMetaKeySpecifier),
		fields?: KeystoneAdminUIListMetaFieldPolicy,
	},
	KeystoneAdminUISort?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUISortKeySpecifier | (() => undefined | KeystoneAdminUISortKeySpecifier),
		fields?: KeystoneAdminUISortFieldPolicy,
	},
	KeystoneMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneMetaKeySpecifier | (() => undefined | KeystoneMetaKeySpecifier),
		fields?: KeystoneMetaFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrderItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderItemKeySpecifier | (() => undefined | OrderItemKeySpecifier),
		fields?: OrderItemFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier),
		fields?: ProductImageFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RedeemUserPasswordResetTokenResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RedeemUserPasswordResetTokenResultKeySpecifier | (() => undefined | RedeemUserPasswordResetTokenResultKeySpecifier),
		fields?: RedeemUserPasswordResetTokenResultFieldPolicy,
	},
	Role?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleKeySpecifier | (() => undefined | RoleKeySpecifier),
		fields?: RoleFieldPolicy,
	},
	SendUserPasswordResetLinkResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendUserPasswordResetLinkResultKeySpecifier | (() => undefined | SendUserPasswordResetLinkResultKeySpecifier),
		fields?: SendUserPasswordResetLinkResultFieldPolicy,
	},
	Stock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StockKeySpecifier | (() => undefined | StockKeySpecifier),
		fields?: StockFieldPolicy,
	},
	TipoDePrenda?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TipoDePrendaKeySpecifier | (() => undefined | TipoDePrendaKeySpecifier),
		fields?: TipoDePrendaFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserAuthenticationWithPasswordFailure?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticationWithPasswordFailureKeySpecifier | (() => undefined | UserAuthenticationWithPasswordFailureKeySpecifier),
		fields?: UserAuthenticationWithPasswordFailureFieldPolicy,
	},
	UserAuthenticationWithPasswordSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticationWithPasswordSuccessKeySpecifier | (() => undefined | UserAuthenticationWithPasswordSuccessKeySpecifier),
		fields?: UserAuthenticationWithPasswordSuccessFieldPolicy,
	},
	ValidateUserPasswordResetTokenResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidateUserPasswordResetTokenResultKeySpecifier | (() => undefined | ValidateUserPasswordResetTokenResultKeySpecifier),
		fields?: ValidateUserPasswordResetTokenResultFieldPolicy,
	},
	_QueryMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _QueryMetaKeySpecifier | (() => undefined | _QueryMetaKeySpecifier),
		fields?: _QueryMetaFieldPolicy,
	}
};