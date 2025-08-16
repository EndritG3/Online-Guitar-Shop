import { gql } from '@apollo/client';

export const GET_BRANDS = gql`
  query GetAllBrands {
    findAllBrands {
      id
      name
      origin
      image
      categories
    }
  }
`;

export const GET_BRAND_BY_ID = gql`
  query GetBrandById($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      origin
      image
      categories
      models {
        id
        name
        type
        image
        price
      }
    }
  }
`;

export const GET_BRAND_MODELS = gql`
  query GetBrandModels($id: ID!, $sortBy: sortBy!) {
    findBrandModels(id: $id, sortBy: $sortBy) {
      id
      name
      category
      price
      image
      description
      specs {
        body
        neck
        pickups
        bridge
      }
    }
  }
`;

export const GET_MODEL = gql`
  query GetModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      price
      image
      description
      musicians {
        name
        musicianImage
        bands
      }
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
    }
  }
`;

export const SEARCH_MODELS = gql`
  query SearchModels($brandId: String!, $name: String!) {
    searchModels(brandId: $brandId, name: $name) {
      id
      name
      category
      price
      image
      description
      specs {
        body
        neck
        pickups
        bridge
      }
    }
  }
`;

export interface Brand {
  id: string;
  name: string;
  origin: string;
  image: string;
  categories: string[];
}

export interface Model {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specs: {
    // Legacy fields used by some queries
    body?: string;
    neck?: string;
    pickups?: string;
    bridge?: string;
    // Extended fields for detailed model page
    bodyWood?: string;
    neckWood?: string;
    fingerboardWood?: string;
    tuners?: string;
    scaleLength?: string;
  };
  musicians?: Array<{
    name: string;
    musicianImage: string;
    bands: string[];
  }>;
}

export interface ModelFilters {
  brandId?: string;
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}
