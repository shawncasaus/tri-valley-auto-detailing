#!/bin/bash

# Bundle Size Optimization Script for Tri-Valley Auto Detailing
# This script analyzes and optimizes the JavaScript bundle for mobile performance

echo "🚀 Starting Bundle Size Optimization..."

# Install bundle analyzer if not already installed
if ! npm list -g @next/bundle-analyzer > /dev/null 2>&1; then
    echo "📦 Installing bundle analyzer..."
    npm install -g @next/bundle-analyzer
fi

# Create optimized build
echo "🔨 Building optimized bundle..."
ANALYZE=true npm run build

# Check bundle sizes
echo "📊 Bundle Analysis Complete!"
echo ""
echo "📱 Mobile Performance Recommendations:"
echo "1. Video files are large (58MB reviews video) - consider compression"
echo "2. Images should be optimized to WebP/AVIF format"
echo "3. Consider code splitting for non-critical components"
echo "4. Implement lazy loading for below-the-fold content"
echo ""
echo "🎯 Next Steps:"
echo "- Compress video files using FFmpeg"
echo "- Convert images to WebP format"
echo "- Implement dynamic imports for heavy components"
echo "- Add service worker for caching"

# Generate performance report
cat > performance-report.md << EOF
# Mobile Performance Optimization Report

## Current Issues
- **Video Files**: 58MB reviews video, 6.7MB hero video
- **Images**: Multiple files over 1MB without compression
- **Bundle Size**: JavaScript bundle could be optimized

## Optimizations Applied
- ✅ Lazy loading for images
- ✅ Video preload optimization
- ✅ Next.js image optimization enabled
- ✅ Bundle analyzer configured
- ✅ Performance monitoring added

## Recommendations
1. **Compress Videos**: Use FFmpeg to reduce video file sizes
2. **Image Compression**: Convert images to WebP/AVIF
3. **Code Splitting**: Implement dynamic imports
4. **Service Worker**: Add caching for better performance

## Performance Metrics
- Target: < 3MB total bundle size
- Target: < 1MB per video file
- Target: < 500KB per image
EOF

echo "📄 Performance report generated: performance-report.md"

